
/* ARQUIVO INEXPLICÁVEL
   Sistema de discussões da comunidade */

const DISCUSSION_STORAGE = "arquivo_inexplicavel_discussions";

const initialDiscussions = [
    {
        id: "vasconcelos",
        title: "O desaparecimento da família Vasconcelos",
        category: "Desaparecimentos",
        author: "coruja_de_cobre",
        status: "aberta",
        date: "há 3 dias",
        description:
            "Três pessoas desapareceram em uma pequena cidade do interior. " +
            "O caso foi encerrado pelas autoridades, mas alguns documentos " +
            "continuam circulando.\n\n" +
            "Encontrei referências a uma quarta pessoa nos registros antigos. " +
            "O problema é que ninguém parece se lembrar dela.\n\n" +
            "Alguém conhece esse caso ou possui alguma informação verificável?",
        replies: [
            {
                author: "norte_ausente",
                date: "há 2 dias",
                text:
                    "Encontrei um registro de jornal com um sobrenome parecido. " +
                    "Ainda estou tentando confirmar se é a mesma família."
            },
            {
                author: "arquivo_0",
                date: "há 1 dia",
                text:
                    "Se você tiver uma cópia do documento, publique apenas os " +
                    "trechos relevantes. Não inclua informações pessoais de terceiros."
            }
        ]
    },
    {
        id: "casa-fotografias",
        title: "Fotografias de uma casa que não existe",
        category: "Locais",
        author: "eco_vazio",
        status: "aberta",
        date: "há 8 horas",
        description:
            "Encontrei duas fotografias antigas que parecem mostrar a mesma casa.\n\n" +
            "As imagens vieram de pessoas diferentes, em cidades diferentes. " +
            "Em ambas, há uma janela no andar superior que parece estar aberta.\n\n" +
            "O problema é que nenhuma das pessoas consegue identificar o lugar.",
        replies: [
            {
                author: "coruja_de_cobre",
                date: "há 5 horas",
                text:
                    "Você consegue comparar as fotografias? Formato das janelas, " +
                    "telhado e posição da porta podem ajudar a identificar uma construção."
            }
        ]
    },
    {
        id: "voz-gravacao",
        title: "Uma voz aparece em todas as gravações",
        category: "Registros inexplicáveis",
        author: "norte_ausente",
        status: "aberta",
        date: "há 40 minutos",
        description:
            "Estou analisando gravações de ambientes vazios para um projeto pessoal.\n\n" +
            "Em três arquivos diferentes, existe um trecho muito baixo que parece " +
            "conter a mesma frase. Não consegui transcrever com segurança.\n\n" +
            "Pode ser interferência ou algum problema no equipamento. Quero comparar " +
            "as gravações antes de tirar qualquer conclusão.",
        replies: []
    }
];

let discussionData = loadDiscussions();


/* ---------- Armazenamento ---------- */

function loadDiscussions() {
    try {
        const saved = localStorage.getItem(DISCUSSION_STORAGE);

        if (saved === null) {
            return structuredClone(initialDiscussions);
        }

        const parsed = JSON.parse(saved);

        if (!Array.isArray(parsed)) {
            return structuredClone(initialDiscussions);
        }

        return parsed;
    } catch (error) {
        console.warn("Não foi possível carregar as discussões.", error);
        return structuredClone(initialDiscussions);
    }
}

function saveDiscussions() {
    try {
        localStorage.setItem(
            DISCUSSION_STORAGE,
            JSON.stringify(discussionData)
        );

        return true;
    } catch (error) {
        console.error("Não foi possível salvar as discussões.", error);

        if (typeof showToast === "function") {
            showToast("Não foi possível salvar os dados neste navegador.");
        }

        return false;
    }
}


/* ---------- Elementos e utilitários ---------- */

function discussionElement(tag, className, text) {
    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (text !== undefined) {
        element.textContent = text;
    }

    return element;
}

function findDiscussion(id) {
    return discussionData.find(item => item.id === id);
}

function discussionDate() {
    return new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "short"
    }).format(new Date());
}

function discussionNotify(message) {
    if (typeof showToast === "function") {
        showToast(message);
    } else {
        window.alert(message);
    }
}


/* ---------- Renderização da lista ---------- */

function renderDiscussions() {
    const list = document.querySelector("#discussion-list");

    if (!list) {
        return;
    }

    const filter = document.querySelector("#discussion-filter")?.value
        || "todas";

    list.replaceChildren();

    const filtered = discussionData.filter(item => {
        return filter === "todas" || item.status === filter;
    });

    if (filtered.length === 0) {
        list.appendChild(
            discussionElement(
                "p",
                "discussion-empty",
                "Nenhuma discussão encontrada nesta categoria."
            )
        );

        return;
    }

    filtered.forEach(item => {
        const card = discussionElement("article", "discussion-card");
        const header = discussionElement("div", "discussion-card-header");

        header.append(
            discussionElement(
                "span",
                "discussion-category",
                `[ ${item.category} ]`
            ),
            discussionElement(
                "span",
                `discussion-status ${item.status === "resolvida" ? "closed" : ""}`,
                item.status === "resolvida"
                    ? "ENCERRADA"
                    : "EM ANDAMENTO"
            )
        );

        const title = discussionElement("h3", "discussion-title");
        const openButton = discussionElement(
            "button",
            "",
            item.title
        );

        openButton.type = "button";
        openButton.addEventListener("click", () => {
            openDiscussion(item.id);
        });

        title.appendChild(openButton);

        const excerpt = discussionElement(
            "p",
            "discussion-excerpt",
            item.description.length > 170
                ? item.description.slice(0, 167) + "..."
                : item.description
        );

        const meta = discussionElement("div", "discussion-meta");

        [
            `Por ${item.author}`,
            `${item.replies.length} resposta(s)`,
            item.date
        ].forEach(text => {
            meta.appendChild(
                discussionElement("span", "", text)
            );
        });

        card.append(header, title, excerpt, meta);
        list.appendChild(card);
    });
}


/* ---------- Criar uma discussão ---------- */

function openNewDiscussion() {
    const content = discussionElement("div", "discussion-create-content");
    const form = discussionElement("form", "discussion-create-form");

    function field(labelText, name, type, options = {}) {
        const wrapper = discussionElement("div", "discussion-form-field");
        const label = discussionElement("label", "", labelText);
        label.htmlFor = `discussion-${name}`;

        let input;

        if (type === "textarea") {
            input = discussionElement("textarea");
            input.rows = options.rows || 4;
        } else if (type === "select") {
            input = discussionElement("select");

            options.choices.forEach(([value, text]) => {
                const option = discussionElement("option", "", text);
                option.value = value;
                input.appendChild(option);
            });
        } else {
            input = discussionElement("input");
            input.type = type;
        }

        input.id = `discussion-${name}`;
        input.name = name;
        input.required = true;

        if (options.maxLength) {
            input.maxLength = options.maxLength;
        }

        if (options.placeholder) {
            input.placeholder = options.placeholder;
        }

        wrapper.append(label, input);
        form.appendChild(wrapper);

        return input;
    }

    const title = field("Título do tópico", "title", "text", {
        maxLength: 120,
        placeholder: "Ex.: Algo estranho aconteceu perto da minha casa"
    });

    const author = field("Seu pseudônimo", "author", "text", {
        maxLength: 30,
        placeholder: "Ex.: observador_17"
    });

    const category = field("Categoria", "category", "select", {
        choices: [
            ["Desaparecimentos", "Desaparecimentos"],
            ["Locais", "Locais"],
            ["Registros inexplicáveis", "Registros inexplicáveis"],
            ["Relatos pessoais", "Relatos pessoais"],
            ["Teorias", "Teorias"]
        ]
    });

    const description = field("Descrição", "description", "textarea", {
        rows: 7,
        maxLength: 5000,
        placeholder: "Conte o que aconteceu e o que você já investigou..."
    });

    const submit = discussionElement(
        "button",
        "primary-link",
        "Criar tópico"
    );

    submit.type = "submit";

    form.appendChild(submit);
    content.appendChild(form);

    form.addEventListener("submit", event => {
        event.preventDefault();

        const newDiscussion = {
            id: `discussion-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            title: title.value.trim(),
            author: author.value.trim(),
            category: category.value,
            description: description.value.trim(),
            status: "aberta",
            date: "agora",
            replies: []
        };

        if (
            !newDiscussion.title ||
            !newDiscussion.author ||
            !newDiscussion.description
        ) {
            discussionNotify("Preencha todos os campos.");
            return;
        }

        discussionData.unshift(newDiscussion);

        if (!saveDiscussions()) {
            discussionData.shift();
            return;
        }

        if (typeof closeModal === "function") {
            closeModal();
        }

        renderDiscussions();
        discussionNotify("Novo tópico criado!");

        document.querySelector("#misterios")?.scrollIntoView({
            behavior: "smooth"
        });
    });

    if (typeof openModal === "function") {
        openModal("Criar nova discussão", content, { wide: true });
    }
}


/* ---------- Abrir uma discussão ---------- */

function openDiscussion(id) {
    const item = findDiscussion(id);

    if (!item) {
        discussionNotify("Esta discussão não foi encontrada.");
        return;
    }

    const content = discussionElement("div", "discussion-detail");

    content.append(
        discussionElement(
            "p",
            "discussion-category",
            `[ ${item.category} ]`
        ),
        discussionElement(
            "p",
            "discussion-detail-info",
            `Iniciada por ${item.author} • ${item.date} • ` +
            `${item.status === "resolvida" ? "Encerrada" : "Em andamento"}`
        )
    );

    const description = discussionElement(
        "div",
        "discussion-detail-description"
    );

    item.description.split("\n").forEach(paragraph => {
        description.appendChild(
            discussionElement(
                "p",
                "",
                paragraph || "\u00a0"
            )
        );
    });

    content.appendChild(description);

    content.appendChild(
        discussionElement("hr", "modal-divider")
    );

    content.appendChild(
        discussionElement(
            "h3",
            "comments-heading",
            `Respostas (${item.replies.length})`
        )
    );

    const replyList = discussionElement("div", "discussion-replies");
    content.appendChild(replyList);

    renderDiscussionReplies(item, replyList);

    if (item.status === "resolvida") {
        content.appendChild(
            discussionElement(
                "p",
                "discussion-closed-notice",
                "Esta discussão foi encerrada. Não é possível adicionar novas respostas."
            )
        );
    } else {
        const form = discussionElement("form", "discussion-reply-form");

        const authorLabel = discussionElement("label", "", "Seu pseudônimo");
        authorLabel.htmlFor = "discussion-reply-author";

        const author = discussionElement("input");
        author.id = "discussion-reply-author";
        author.name = "author";
        author.maxLength = 30;
        author.required = true;
        author.placeholder = "Ex.: arquivo_17";

        const textLabel = discussionElement("label", "", "Sua resposta");
        textLabel.htmlFor = "discussion-reply-text";

        const text = discussionElement("textarea");
        text.id = "discussion-reply-text";
        text.name = "reply";
        text.maxLength = 2000;
        text.rows = 5;
        text.required = true;
        text.placeholder = "Compartilhe uma teoria ou informação relevante...";

        const submit = discussionElement(
            "button",
            "primary-link",
            "Enviar resposta"
        );

        submit.type = "submit";

        form.append(
            authorLabel,
            author,
            textLabel,
            text,
            submit
        );

        form.addEventListener("submit", event => {
            event.preventDefault();

            const authorValue = author.value.trim();
            const textValue = text.value.trim();

            if (!authorValue || !textValue) {
                discussionNotify("Preencha o pseudônimo e a resposta.");
                return;
            }

            const reply = {
                author: authorValue,
                date: discussionDate(),
                text: textValue
            };

            item.replies.push(reply);

            if (!saveDiscussions()) {
                item.replies.pop();
                return;
            }

            openDiscussion(id);
            discussionNotify("Resposta adicionada à discussão.");
        });

        content.appendChild(form);

        const closeButton = discussionElement(
            "button",
            "discussion-close-button",
            "Encerrar discussão"
        );

        closeButton.type = "button";

        closeButton.addEventListener("click", () => {
            const confirmed = window.confirm(
                "Deseja encerrar esta discussão? Não será possível adicionar novas respostas."
            );

            if (!confirmed) {
                return;
            }

            const previousStatus = item.status;
            item.status = "resolvida";

            if (!saveDiscussions()) {
                item.status = previousStatus;
                return;
            }

            renderDiscussions();
            openDiscussion(id);
            discussionNotify("Discussão encerrada.");
        });

        content.appendChild(closeButton);
    }

    if (typeof openModal === "function") {
        openModal(item.title, content, { wide: true });
    }
}


/* ---------- Renderizar respostas ---------- */

function renderDiscussionReplies(item, container) {
    container.replaceChildren();

    if (item.replies.length === 0) {
        container.appendChild(
            discussionElement(
                "p",
                "no-comments",
                "Ninguém respondeu ainda. Você pode ser a primeira pessoa."
            )
        );

        return;
    }

    item.replies.forEach(reply => {
        const card = discussionElement("article", "discussion-reply");

        const header = discussionElement(
            "div",
            "discussion-reply-header"
        );

        header.append(
            discussionElement("strong", "", reply.author),
            discussionElement("span", "", reply.date)
        );

        card.append(
            header,
            discussionElement("p", "", reply.text)
        );

        container.appendChild(card);
    });
}


/* ---------- Inicialização e navegação ---------- */

function initializeDiscussions() {
    const filter = document.querySelector("#discussion-filter");

    if (filter) {
        filter.addEventListener("change", renderDiscussions);
    }

    renderDiscussions();

    /*
     * Intercepta os links antes do script principal,
     * para abrir os formulários e tópicos corretamente.
     */
    document.addEventListener("click", event => {
        const link = event.target.closest("a");

        if (!link) {
            return;
        }

        const href = link.getAttribute("href");

        if (
            href === "#nova-discussao" ||
            link.id === "open-discussion-form"
        ) {
            event.preventDefault();
            event.stopImmediatePropagation();
            openNewDiscussion();
        }
    }, true);

    console.info("Sistema de discussões carregado.");
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeDiscussions);
} else {
    initializeDiscussions();
}


