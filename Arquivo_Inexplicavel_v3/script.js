
/* =========================================
   ARQUIVO INEXPLICÁVEL
   Interações e funcionalidades locais
   ========================================= */


/* ---------- 1. Configurações ---------- */

const STORAGE_KEYS = {
    posts: "arquivo_inexplicavel_posts",
    comments: "arquivo_inexplicavel_comments",
    secrets: "arquivo_inexplicavel_secrets"
};

const defaultPosts = [
    {
        id: "post-luzes",
        title: "Luzes acesas no prédio que está vazio há vinte anos",
        category: "Locais",
        author: "coruja_de_cobre",
        date: "há 2 dias",
        views: 184,
        tags: ["prédio abandonado", "luzes"],
        excerpt:
            "Passei por lá de ônibus durante três noites seguidas. Sempre havia uma luz no terceiro andar.",
        body:
            "Alguém conhece a história do antigo prédio perto da estação?\n\n" +
            "Passei por lá durante três noites seguidas. Sempre havia uma luz no terceiro andar. " +
            "Ontem, resolvi conferir o endereço, mas encontrei as janelas fechadas e uma placa " +
            "dizendo que o local está interditado há vinte anos.\n\n" +
            "O mais estranho é que a luz continuava acesa. Não parecia uma lanterna. " +
            "Parecia que alguém estava esperando por alguma coisa."
    },
    {
        id: "post-telefone",
        title: "Recebi uma ligação de um número que não existe",
        category: "Relatos",
        author: "eco_vazio",
        date: "há 5 horas",
        views: 92,
        tags: ["telefone", "relato pessoal"],
        excerpt:
            "O número aparece no histórico, mas não consigo retornar a ligação. O estranho é que a voz sabia meu nome.",
        body:
            "A ligação durou onze segundos.\n\n" +
            "Não havia ruído de fundo, música ou interferência. Apenas uma pessoa respirando. " +
            "Antes de desligar, ela disse meu nome completo.\n\n" +
            "Consultei o histórico de chamadas e tentei retornar. O telefone informa que o número não existe.\n\n" +
            "Alguém já passou por algo parecido?"
    },
    {
        id: "post-estrada",
        title: "Alguém conhece a estrada que não aparece nos mapas?",
        category: "Investigação",
        author: "norte_ausente",
        date: "ontem",
        views: 231,
        tags: ["estradas", "mapas"],
        excerpt:
            "Encontrei uma estrada de terra durante uma viagem. Não havia placas, e meu GPS parecia insistir que eu estava em outro lugar.",
        body:
            "Eu estava voltando de uma viagem quando encontrei uma estrada que não aparecia no GPS.\n\n" +
            "Não havia placas, casas ou postes. Só árvores dos dois lados. Dirigi por alguns minutos " +
            "e encontrei uma construção com todas as janelas cobertas.\n\n" +
            "Quando voltei para a estrada principal, o relógio do carro estava atrasado em quarenta minutos.\n\n" +
            "Tenho uma fotografia, mas prefiro publicar depois de descobrir se alguém reconhece o lugar."
    }
];

const defaultComments = {};

const defaultSecrets = [
    {
        id: "segredo-001",
        title: "Uma mensagem sem remetente",
        text:
            "A mensagem chegou às 03:17.\n\n" +
            "O remetente estava vazio. O assunto também.\n\n" +
            "Havia apenas uma frase no corpo do e-mail:\n\n" +
            "\"Você ainda está procurando por nós?\"\n\n" +
            "O e-mail foi apagado, mas uma cópia permaneceu na pasta de rascunhos."
    },
    {
        id: "segredo-002",
        title: "O usuário que nunca existiu",
        text:
            "O perfil não aparece no diretório de membros.\n\n" +
            "Não existe data de cadastro, endereço de e-mail ou histórico de acesso.\n\n" +
            "Ainda assim, três publicações antigas citam esse usuário pelo nome.\n\n" +
            "Uma delas foi editada depois de ser arquivada."
    }
];


/* ---------- 2. Armazenamento local ---------- */

function loadData(key, fallback) {
    try {
        const saved = localStorage.getItem(key);

        if (saved === null) {
            return fallback;
        }

        return JSON.parse(saved);
    } catch (error) {
        console.warn("Não foi possível carregar:", key, error);
        return fallback;
    }
}

function saveData(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.error("Não foi possível salvar:", key, error);
        showToast("Não foi possível salvar os dados neste navegador.");
        return false;
    }
}

let posts = loadData(STORAGE_KEYS.posts, defaultPosts);
let comments = loadData(STORAGE_KEYS.comments, defaultComments);
let secrets = loadData(STORAGE_KEYS.secrets, defaultSecrets);


/* ---------- 3. Utilitários ---------- */

function createElement(tag, className, text) {
    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (text !== undefined) {
        element.textContent = text;
    }

    return element;
}

function normalizeText(text) {
    return String(text ?? "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function formatDate(date = new Date()) {
    return new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "short"
    }).format(date);
}

function escapeText(text) {
    return String(text ?? "");
}

function findPost(id) {
    return posts.find(post => post.id === id);
}

function getPostComments(id) {
    if (!Array.isArray(comments[id])) {
        comments[id] = [];
    }

    return comments[id];
}


/* ---------- 4. Notificações ---------- */

let toastTimer;

function showToast(message) {
    let toast = document.querySelector(".site-toast");

    if (!toast) {
        toast = createElement("div", "site-toast");
        toast.setAttribute("role", "status");
        toast.setAttribute("aria-live", "polite");
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add("visible");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("visible");
    }, 3000);
}


/* ---------- 5. Modal reutilizável ---------- */

function closeModal() {
    const modal = document.querySelector(".site-modal");

    if (modal) {
        modal.remove();
    }

    document.body.classList.remove("modal-open");
}

function openModal(title, content, options = {}) {
    closeModal();

    const overlay = createElement("div", "site-modal");
    overlay.setAttribute("role", "presentation");

    const dialog = createElement("section", "modal-dialog");
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("aria-labelledby", "modal-title");

    if (options.wide) {
        dialog.classList.add("modal-wide");
    }

    const header = createElement("header", "modal-header");

    const heading = createElement("h2", "", title);
    heading.id = "modal-title";

    const closeButton = createElement("button", "modal-close", "×");
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "Fechar janela");
    closeButton.addEventListener("click", closeModal);

    header.append(heading, closeButton);

    const body = createElement("div", "modal-body");
    body.appendChild(content);

    dialog.append(header, body);
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);

    document.body.classList.add("modal-open");

    overlay.addEventListener("click", event => {
        if (event.target === overlay) {
            closeModal();
        }
    });

    closeButton.focus();

    return body;
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeModal();
    }
});


/* ---------- 6. Criar a barra de pesquisa ---------- */

function setupSearch() {
    const section = document.querySelector("#relatos");

    if (!section || document.querySelector("#forum-search")) {
        return;
    }

    const searchBox = createElement("div", "forum-search");

    const label = createElement("label", "", "Pesquisar no arquivo");
    label.htmlFor = "forum-search";

    const controls = createElement("div", "search-controls");

    const input = createElement("input");
    input.id = "forum-search";
    input.type = "search";
    input.placeholder = "Digite uma palavra-chave...";
    input.autocomplete = "off";

    const category = createElement("select");
    category.id = "forum-category";
    category.setAttribute("aria-label", "Filtrar por categoria");

    [
        ["", "Todas as categorias"],
        ["Locais", "Locais"],
        ["Relatos", "Relatos"],
        ["Investigação", "Investigação"],
        ["Comunidade", "Comunidade"]
    ].forEach(([value, text]) => {
        const option = createElement("option", "", text);
        option.value = value;
        category.appendChild(option);
    });

    controls.append(input, category);
    searchBox.append(label, controls);

    const description = createElement(
        "p",
        "search-description",
        "Pesquise por título, autor, categoria ou palavras-chave."
    );

    searchBox.appendChild(description);

    const heading = section.querySelector(".section-heading");

    if (heading) {
        heading.insertAdjacentElement("afterend", searchBox);
    } else {
        section.prepend(searchBox);
    }

    input.addEventListener("input", filterPosts);
    category.addEventListener("change", filterPosts);
}

function filterPosts() {
    const input = document.querySelector("#forum-search");
    const category = document.querySelector("#forum-category");
    const section = document.querySelector("#relatos");

    if (!input || !category || !section) {
        return;
    }

    const query = normalizeText(input.value);
    const selectedCategory = category.value;

    let visibleCount = 0;

    section.querySelectorAll(".post-card").forEach(card => {
        const post = findPost(card.dataset.postId);

        if (!post) {
            return;
        }

        const searchableText = normalizeText([
            post.title,
            post.author,
            post.category,
            post.excerpt,
            ...(post.tags || [])
        ].join(" "));

        const matchesText = searchableText.includes(query);
        const matchesCategory =
            !selectedCategory || post.category === selectedCategory;

        const visible = matchesText && matchesCategory;

        card.hidden = !visible;

        if (visible) {
            visibleCount++;
        }
    });

    let result = section.querySelector(".search-results");

    if (!result) {
        result = createElement("p", "search-results");
        result.setAttribute("aria-live", "polite");

        const searchBox = section.querySelector(".forum-search");

        if (searchBox) {
            searchBox.appendChild(result);
        }
    }

    result.textContent =
        visibleCount === 1
            ? "1 registro encontrado."
            : `${visibleCount} registros encontrados.`;
}


/* ---------- 7. Renderizar publicações ---------- */

function renderPosts() {
    const section = document.querySelector("#relatos");

    if (!section) {
        return;
    }

    section.querySelectorAll(".post-card").forEach(card => card.remove());

    let emptyMessage = section.querySelector(".empty-posts");

    if (emptyMessage) {
        emptyMessage.remove();
    }

    const description = section.querySelector(".section-description");

    posts.forEach(post => {
        const card = createElement("article", "post-card");
        card.dataset.postId = post.id;

        const category = createElement(
            "div",
            "post-category",
            `[ ${post.category.toUpperCase()} ]`
        );

        const content = createElement("div", "post-content");

        const title = createElement("h3");
        const titleLink = createElement("a", "", post.title);

        titleLink.href = `#${post.id}`;
        title.appendChild(titleLink);

        const excerpt = createElement("p", "post-excerpt", post.excerpt);

        const metadata = createElement("div", "post-meta");

        metadata.append(
            document.createTextNode("Por "),
            createElement("a", "", post.author),
            document.createTextNode(` • ${post.date} • ${post.views} visualizações`)
        );

        metadata.querySelector("a").href = `#perfil-${post.author}`;

        const tags = createElement("div", "post-tags");

        (post.tags || []).forEach(tag => {
            tags.appendChild(createElement("span", "", `#${tag}`));
        });

        content.append(title, excerpt, metadata, tags);
        card.append(category, content);

        if (description) {
            description.insertAdjacentElement("afterend", card);
        } else {
            section.appendChild(card);
        }

        titleLink.addEventListener("click", event => {
            event.preventDefault();
            openPost(post.id);
        });

        metadata.querySelector("a").addEventListener("click", event => {
            event.preventDefault();
            openProfile(post.author);
        });
    });

    if (posts.length === 0) {
        emptyMessage = createElement(
            "p",
            "empty-posts",
            "Nenhum registro foi publicado ainda."
        );

        section.appendChild(emptyMessage);
    }

    filterPosts();
    updateStatistics();
}


/* ---------- 8. Abrir uma publicação ---------- */

function openPost(id) {
    const post = findPost(id);

    if (!post) {
        showToast("Este registro não foi encontrado.");
        return;
    }

    post.views = Number(post.views || 0) + 1;
    saveData(STORAGE_KEYS.posts, posts);
    updateStatistics();

    const content = createElement("div", "post-detail");

    const category = createElement(
        "p",
        "detail-category",
        `[ ${post.category.toUpperCase()} ]`
    );

    const metadata = createElement(
        "p",
        "detail-meta",
        `Publicado por ${post.author} • ${post.date} • ${post.views} visualizações`
    );

    const body = createElement("div", "detail-text");

    escapeText(post.body)
        .split("\n")
        .forEach(paragraph => {
            if (paragraph.trim()) {
                body.appendChild(createElement("p", "", paragraph));
            } else {
                body.appendChild(createElement("div", "paragraph-space"));
            }
        });

    content.append(category, metadata, body);

    const tags = createElement("div", "post-tags");

    (post.tags || []).forEach(tag => {
        tags.appendChild(createElement("span", "", `#${tag}`));
    });

    content.appendChild(tags);

    const divider = createElement("hr", "modal-divider");
    content.appendChild(divider);

    content.appendChild(createElement("h3", "comments-heading", "Comentários"));

    const commentList = createElement("div", "comment-list");
    commentList.id = "comment-list";

    content.appendChild(commentList);

    renderComments(post.id, commentList);

    const form = createElement("form", "comment-form");

    const label = createElement("label", "", "Seu pseudônimo");
    label.htmlFor = "comment-author";

    const authorInput = createElement("input");
    authorInput.id = "comment-author";
    authorInput.name = "author";
    authorInput.maxLength = 30;
    authorInput.placeholder = "ex.: observador_17";
    authorInput.required = true;

    const textLabel = createElement("label", "", "Seu comentário");
    textLabel.htmlFor = "comment-text";

    const textarea = createElement("textarea");
    textarea.id = "comment-text";
    textarea.name = "comment";
    textarea.maxLength = 1000;
    textarea.rows = 4;
    textarea.placeholder = "O que você acha deste relato?";
    textarea.required = true;

    const submit = createElement("button", "primary-link", "Publicar comentário");
    submit.type = "submit";

    form.append(label, authorInput, textLabel, textarea, submit);
    content.appendChild(form);

    form.addEventListener("submit", event => {
        event.preventDefault();

        const author = authorInput.value.trim();
        const text = textarea.value.trim();

        if (!author || !text) {
            showToast("Preencha o pseudônimo e o comentário.");
            return;
        }

        if (author.length > 30 || text.length > 1000) {
            showToast("O comentário excede o limite permitido.");
            return;
        }

        const postComments = getPostComments(post.id);

        postComments.push({
            author,
            text,
            date: formatDate()
        });

        if (!saveData(STORAGE_KEYS.comments, comments)) {
            postComments.pop();
            return;
        }

        textarea.value = "";
        renderComments(post.id, commentList);

        showToast("Comentário publicado neste navegador.");
    });

    openModal(post.title, content, { wide: true });
}


/* ---------- 9. Renderizar comentários ---------- */

function renderComments(postId, container) {
    container.replaceChildren();

    const postComments = getPostComments(postId);

    if (postComments.length === 0) {
        container.appendChild(
            createElement(
                "p",
                "no-comments",
                "Nenhum comentário por enquanto. Seja o primeiro a responder."
            )
        );

        return;
    }

    postComments.forEach(comment => {
        const card = createElement("article", "comment-card");

        const header = createElement("div", "comment-header");

        header.append(
            createElement("strong", "", comment.author),
            createElement("span", "", comment.date)
        );

        const text = createElement("p", "comment-text", comment.text);

        card.append(header, text);
        container.appendChild(card);
    });
}


/* ---------- 10. Criar formulário de publicação ---------- */

function openNewPostForm() {
    const content = createElement("div", "new-post-content");

    const intro = createElement(
        "p",
        "",
        "Compartilhe um relato, uma investigação ou uma história. Use um pseudônimo se preferir."
    );

    const form = createElement("form", "new-post-form");

    function addField(labelText, name, type, options = {}) {
        const wrapper = createElement("div", "form-field");
        const label = createElement("label", "", labelText);

        label.htmlFor = `new-post-${name}`;

        let field;

        if (type === "textarea") {
            field = createElement("textarea");
            field.rows = options.rows || 4;
        } else if (type === "select") {
            field = createElement("select");

            options.values.forEach(([value, text]) => {
                const option = createElement("option", "", text);
                option.value = value;
                field.appendChild(option);
            });
        } else {
            field = createElement("input");
            field.type = type;
        }

        field.id = `new-post-${name}`;
        field.name = name;
        field.required = true;

        if (options.maxLength) {
            field.maxLength = options.maxLength;
        }

        if (options.placeholder) {
            field.placeholder = options.placeholder;
        }

        wrapper.append(label, field);
        form.appendChild(wrapper);

        return field;
    }

    const title = addField("Título", "title", "text", {
        maxLength: 120,
        placeholder: "Dê um título ao seu registro"
    });

    const author = addField("Pseudônimo", "author", "text", {
        maxLength: 30,
        placeholder: "ex.: arquivo_17"
    });

    const category = addField("Categoria", "category", "select", {
        values: [
            ["Locais", "Locais"],
            ["Relatos", "Relatos"],
            ["Investigação", "Investigação"],
            ["Comunidade", "Comunidade"]
        ]
    });

    const excerpt = addField("Resumo", "excerpt", "textarea", {
        rows: 3,
        maxLength: 240,
        placeholder: "Um breve resumo para a página inicial"
    });

    const body = addField("Relato completo", "body", "textarea", {
        rows: 8,
        maxLength: 10000,
        placeholder: "Conte o que aconteceu..."
    });

    const tags = addField("Etiquetas (separadas por vírgulas)", "tags", "text", {
        maxLength: 150,
        placeholder: "ex.: desaparecimento, fotografia, interior"
    });

    const submit = createElement("button", "primary-link", "Publicar registro");
    submit.type = "submit";

    form.appendChild(submit);
    content.append(intro, form);

    form.addEventListener("submit", event => {
        event.preventDefault();

        const newPost = {
            id: `post-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            title: title.value.trim(),
            author: author.value.trim(),
            category: category.value,
            excerpt: excerpt.value.trim(),
            body: body.value.trim(),
            tags: tags.value
                .split(",")
                .map(tag => tag.trim())
                .filter(Boolean)
                .slice(0, 8),
            date: "agora",
            views: 0
        };

        if (
            !newPost.title ||
            !newPost.author ||
            !newPost.excerpt ||
            !newPost.body
        ) {
            showToast("Preencha todos os campos obrigatórios.");
            return;
        }

        posts.unshift(newPost);

        if (!saveData(STORAGE_KEYS.posts, posts)) {
            posts.shift();
            return;
        }

        closeModal();
        renderPosts();

        showToast("Registro adicionado ao arquivo local.");

        document.querySelector("#relatos")?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    openModal("Enviar um registro", content, { wide: true });
}


/* ---------- 11. Perfis de membros ---------- */

const memberProfiles = {
    "arquivo_0": {
        role: "Administrador",
        joined: "2023",
        bio:
            "Reúno registros, relatos e documentos sobre acontecimentos " +
            "que desafiam explicações comuns.\n\n" +
            "Não estou aqui para convencer ninguém. Apenas para registrar."
    },

    "coruja_de_cobre": {
        role: "Investigador",
        joined: "2024",
        bio:
            "Tenho interesse por prédios abandonados, histórias locais " +
            "e documentos esquecidos."
    },

    "eco_vazio": {
        role: "Novato",
        joined: "2026",
        bio:
            "Comecei a registrar acontecimentos estranhos depois de uma " +
            "ligação que ainda não consegui explicar."
    },

    "norte_ausente": {
        role: "Colaborador",
        joined: "2025",
        bio:
            "Mapas, estradas, viagens e lugares que não aparecem onde deveriam."
    }
};

function openProfile(username) {
    const profile = memberProfiles[username] || {
        role: "Membro",
        joined: "Desconhecido",
        bio: "Este perfil ainda não possui uma biografia pública."
    };

    const content = createElement("div", "profile-modal-content");

    const avatar = createElement("div", "profile-avatar profile-avatar-large", "?");

    const name = createElement("h3", "", username);
    const role = createElement("p", "profile-role", profile.role);
    const joined = createElement("p", "profile-joined", `Membro desde ${profile.joined}`);

    const bio = createElement("div", "profile-bio");

    profile.bio.split("\n").forEach(paragraph => {
        if (paragraph.trim()) {
            bio.appendChild(createElement("p", "", paragraph));
        }
    });

    const memberPosts = posts.filter(post => post.author === username);

    const postHeading = createElement(
        "h3",
        "comments-heading",
        `Registros publicados (${memberPosts.length})`
    );

    content.append(avatar, name, role, joined, bio, postHeading);

    if (memberPosts.length === 0) {
        content.appendChild(
            createElement("p", "", "Este membro ainda não possui registros públicos.")
        );
    }

    memberPosts.forEach(post => {
        const link = createElement("a", "profile-post-link", post.title);
        link.href = `#${post.id}`;

        link.addEventListener("click", event => {
            event.preventDefault();
            openPost(post.id);
        });

        content.appendChild(link);
    });

    openModal(`Perfil: ${username}`, content);
}


/* ---------- 12. Segredos ---------- */

function openSecret(id) {
    const secret = secrets.find(item => item.id === id);

    if (!secret) {
        showToast("Este registro não foi encontrado.");
        return;
    }

    const content = createElement("div", "secret-detail");

    content.appendChild(
        createElement("p", "secret-warning", "REGISTRO RESTRITO • CÓPIA LOCAL")
    );

    secret.text.split("\n").forEach(paragraph => {
        if (paragraph.trim()) {
            content.appendChild(createElement("p", "", paragraph));
        } else {
            content.appendChild(createElement("div", "paragraph-space"));
        }
    });

    content.appendChild(
        createElement(
            "p",
            "secret-signature",
            "— arquivo_0"
        )
    );

    openModal(secret.title, content);
}


/* ---------- 13. Navegação e links ---------- */

function setupNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const href = link.getAttribute("href");

            if (!href || href === "#") {
                event.preventDefault();
                return;
            }

            if (link.closest(".post-card")) {
                return;
            }

            if (href.startsWith("#perfil-")) {
                event.preventDefault();
                openProfile(decodeURIComponent(href.slice("#perfil-".length)));
                return;
            }

            if (href.startsWith("#segredo-")) {
                event.preventDefault();
                openSecret(href.slice(1));
                return;
            }

            if (href.startsWith("#post-")) {
                event.preventDefault();
                openPost(href.slice(1));
                return;
            }

            if (href === "#nova-publicacao") {
                event.preventDefault();
                openNewPostForm();
                return;
            }

            if (
                href === "#login" ||
                href === "#registro"
            ) {
                event.preventDefault();
                openAccountNotice(
                    href === "#login" ? "Entrar" : "Criar conta"
                );
                return;
            }

            if (
                href === "#todos-relatos" ||
                href === "#todos-misterios" ||
                href === "#todos-arquivos" ||
                href === "#todos-membros"
            ) {
                event.preventDefault();

                const destination = {
                    "#todos-relatos": "#relatos",
                    "#todos-misterios": "#misterios",
                    "#todos-arquivos": "#arquivos",
                    "#todos-membros": "#membros"
                }[href];

                document.querySelector(destination)?.scrollIntoView({
                    behavior: "smooth"
                });

                showToast("Esta área ainda está em desenvolvimento.");
                return;
            }

            const target = document.querySelector(href);

            if (!target) {
                event.preventDefault();

                if (
                    href.startsWith("#arquivo-") ||
                    href.startsWith("#discussao-") ||
                    href === "#regras" ||
                    href === "#contato"
                ) {
                    openPlaceholder(href);
                } else {
                    showToast("Esta página ainda não foi catalogada.");
                }
            }
        });
    });
}


/* ---------- 14. Avisos de conta ---------- */

function openAccountNotice(action) {
    const content = createElement("div", "account-notice");

    content.appendChild(
        createElement(
            "p",
            "",
            action === "Entrar"
                ? "A autenticação ainda não foi implementada."
                : "O cadastro de membros ainda não foi implementado."
        )
    );

    content.appendChild(
        createElement(
            "p",
            "",
            "Nesta versão, os registros e comentários são armazenados apenas no navegador utilizado."
        )
    );

    content.appendChild(
        createElement(
            "p",
            "account-warning",
            "Não use informações pessoais reais neste protótipo."
        )
    );

    openModal(action, content);
}


/* ---------- 15. Páginas em desenvolvimento ---------- */

function openPlaceholder(reference) {
    const content = createElement("div", "placeholder-content");

    const messages = {
        "#arquivo-01": [
            "transcricao_ligacao_04.txt",
            "O documento ainda não foi anexado ao protótipo."
        ],

        "#arquivo-02": [
            "relatorio_ocorrencia_17.pdf",
            "O relatório está catalogado, mas seu conteúdo ainda não foi disponibilizado."
        ],

        "#arquivo-03": [
            "fotografia_sem_data.jpg",
            "A imagem ainda não foi anexada ao protótipo."
        ],

        "#discussao-vasconcelos": [
            "O desaparecimento da família Vasconcelos",
            "A área de discussão será implementada em uma próxima etapa."
        ],

        "#discussao-casa": [
            "Fotografias de uma casa que não existe",
            "A área de discussão será implementada em uma próxima etapa."
        ],

        "#regras": [
            "Regras do fórum",
            "As regras da comunidade serão adicionadas posteriormente."
        ],

        "#contato": [
            "Contato",
            "Os canais de contato ainda não foram definidos."
        ]
    };

    const [title, message] = messages[reference] || [
        "Registro indisponível",
        "Este conteúdo ainda não foi catalogado."
    ];

    content.appendChild(createElement("p", "", message));

    content.appendChild(
        createElement(
            "p",
            "placeholder-reference",
            `REFERÊNCIA: ${reference}`
        )
    );

    openModal(title, content);
}


/* ---------- 16. Estatísticas ---------- */

function updateStatistics() {
    const stats = document.querySelectorAll(".stat-number");

    if (stats[0]) {
        stats[0].textContent = String(posts.length).padStart(3, "0");
    }

    if (stats[2]) {
        stats[2].textContent = "009";
    }
}


/* ---------- 17. Botões de publicação ---------- */

function setupPublishButton() {
    const links = document.querySelectorAll('a[href="#publicar"]');

    links.forEach(link => {
        link.href = "#nova-publicacao";
    });
}


/* ---------- 18. Inicialização ---------- */

function initializeArchive() {
    setupSearch();
    renderPosts();
    setupNavigation();
    setupPublishButton();

    console.info(
        "%cARQUIVO INEXPLICÁVEL",
        "color: #a99ab5; font-size: 16px; font-weight: bold;"
    );

    console.info(
        "Sistema carregado. Alguns registros permanecem sem catalogação."
    );
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeArchive);
} else {
    initializeArchive();
}
