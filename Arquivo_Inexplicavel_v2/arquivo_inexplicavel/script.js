// ARQUIVO INEXPLICÁVEL
// JavaScript principal

// ---------- 1. Dados dos tópicos ----------

const posts = [
    {
        id: "p01",
        title: "Luzes acesas no prédio que está vazio há vinte anos",
        category: "Locais",
        author: "coruja_de_cobre",
        date: "há 2 dias",
        views: 184,
        icon: "▧",
        tags: ["prédio abandonado", "luzes"],
        excerpt: "Passei por lá de ônibus durante três noites seguidas. Sempre havia uma luz no terceiro andar.",
        body: "Alguém conhece a história do antigo prédio perto da estação? O zelador do mercado diz que não há energia ligada há anos, mas eu vi a mesma janela iluminada em noites diferentes.\n\nNão fui até lá e não recomendo que ninguém entre. Estou tentando encontrar notícias antigas sobre o lugar.",
        comments: [
            {
                author: "morcego_manso",
                text: "Pode ser reflexo de algum carro. Você lembra o horário?"
            },
            {
                author: "linha_fantasma",
                text: "Tem uma matéria antiga sobre um incêndio na região, mas não sei se é o mesmo prédio."
            }
        ]
    },
    {
        id: "p02",
        title: "A estrada onde o rádio sempre perde a estação",
        category: "Relatos",
        author: "linha_fantasma",
        date: "há 4 dias",
        views: 96,
        icon: "♫",
        tags: ["estrada", "rádio"],
        excerpt: "Minha família chama de curva muda. O rádio chia por alguns segundos, mesmo com o carro parado.",
        body: "Isso acontece numa estrada que atravessa uma área de mata. Meu pai diz que é interferência, e provavelmente é. Só acho estranho que o relógio do painel também atrasou alguns minutos na última vez.\n\nNão estou dizendo que é paranormal. Queria saber se mais alguém já percebeu algo parecido.",
        comments: [
            {
                author: "arquivo_morto",
                text: "Interferência e relógios ruins podem explicar muita coisa. Você tem a localização aproximada?"
            }
        ]
    },
    {
        id: "p03",
        title: "Catálogo de símbolos encontrados em casas antigas",
        category: "Pesquisa",
        author: "arquivo_morto",
        date: "há 1 semana",
        views: 212,
        icon: "⌘",
        tags: ["símbolos", "arquitetura", "04-B"],
        excerpt: "Estou organizando fotografias de marcas em batentes e porões. Algumas se repetem em cidades diferentes.",
        body: "Estou montando um catálogo de marcas que aparecem em construções antigas. A maioria tem explicações comuns: marcas de carpinteiro, símbolos religiosos ou rabiscos de moradores.\n\nMas três fotografias enviadas por pessoas diferentes mostram um desenho quase idêntico, sempre perto de uma porta interna. Não consegui confirmar se as imagens têm alguma relação.\n\nNota: registro 04-B. A terceira fotografia está sem data e o remetente não respondeu.",
        comments: [
            {
                author: "coruja_de_cobre",
                text: "Você pretende publicar as imagens em resolução maior?"
            },
            {
                author: "linha_fantasma",
                text: "Cuidado para não misturar símbolos parecidos de tradições diferentes."
            }
        ]
    },
    {
        id: "p04",
        title: "O nome que aparece em listas telefônicas antigas",
        category: "Lendas urbanas",
        author: "morcego_manso",
        date: "há 2 semanas",
        views: 73,
        icon: "☎",
        tags: ["lenda urbana", "arquivo"],
        excerpt: "Uma brincadeira local diz para nunca procurar o próprio nome em listas antigas.",
        body: "A história muda dependendo de quem conta. Em uma versão, o nome aparece ao lado de um número que não existe. Em outra, a pessoa encontra o próprio endereço, mas com uma data futura.\n\nAté agora só achei relatos de segunda mão. Se alguém souber de onde isso veio, gostaria de comparar versões.",
        comments: [
            {
                author: "arquivo_morto",
                text: "Parece uma variação de lendas sobre telefonemas do futuro."
            }
        ]
    },
    {
        id: "p05",
        title: "Relatório 04-B: a porta ausente",
        category: "Pesquisa",
        author: "nó-cego",
        date: "há 3 dias",
        views: 19,
        icon: "▣",
        tags: ["04-B", "fotografia", "rascunho"],
        excerpt: "Três fotografias. Três endereços. A mesma parede — ou a mesma ausência.",
        body: "Rascunho de moderação — cópia parcial preservada.\n\nAs fotografias foram enviadas em semanas diferentes e atribuídas a locais sem relação aparente. Em todas, o corredor termina numa parede lisa. Os remetentes descrevem uma porta naquele ponto.\n\nNão tenho negativos, metadados confiáveis ou testemunhas independentes. Pode ser erro de memória, compressão, edição ou uma brincadeira coordenada. Não descartar explicações simples.\n\nObservação adicionada depois: a imagem anexada ao tópico parece diferente da cópia que guardei localmente.",
        comments: []
    },
    {
        id: "p06",
        title: "O tópico que apareceu antes da conta",
        category: "Relatos",
        author: "nó-cego",
        date: "ontem",
        views: 11,
        icon: "◌",
        tags: ["registro", "inconclusivo"],
        excerpt: "Uma notificação indicava uma resposta num tópico que, segundo o painel, ainda não tinha sido criado.",
        body: "Talvez tenha sido cache, sincronização ou uma falha na interface. A notificação desapareceu antes que eu conseguisse capturar a tela.\n\nEstou registrando apenas porque duas pessoas mencionaram ter visto o título por alguns segundos: ‘não abra a segunda cópia’. Se alguém tiver uma captura, envie por mensagem privada do fórum — não publique dados pessoais.",
        comments: [
            {
                author: "visitante_17",
                text: "Eu vi um título parecido, mas achei que era uma propaganda quebrada."
            }
        ]
    }
];

// ---------- 2. Membros ----------

const members = [
    {
        name: "coruja_de_cobre",
        role: "Membro antigo",
        bio: "Recortes de jornal, prédios esquecidos e histórias locais.",
        avatar: "☾"
    },
    {
        name: "linha_fantasma",
        role: "Pesquisador amador",
        bio: "Rádios, gravações e fenômenos de estrada.",
        avatar: "〰"
    },
    {
        name: "arquivo_morto",
        role: "Bibliotecário",
        bio: "Digitaliza documentos e compara fontes antigas.",
        avatar: "▤"
    },
    {
        name: "morcego_manso",
        role: "Curioso",
        bio: "Folclore, lendas urbanas e histórias de família.",
        avatar: "♧"
    },
    {
        name: "nó-cego",
        role: "Administrador / fundador",
        bio: "Organiza os relatos. Prefere não falar sobre como começou o arquivo.",
        avatar: "?"
    },
    {
        name: "visitante_17",
        role: "Novato",
        bio: "Ainda tentando entender o que é coincidência.",
        avatar: "☻"
    }
];

// ---------- 3. Documentos fictícios ----------

const docs = [
    {
        name: "guia_de_pesquisa.txt",
        desc: "Como registrar relatos sem expor testemunhas.",
        content: `ARQUIVO INEXPLICÁVEL — GUIA DE PESQUISA

1. Registre a data e a origem do relato.
2. Separe observação direta de informação ouvida de terceiros.
3. Guarde cópias sem alterar os originais.
4. Evite publicar nomes, endereços ou dados pessoais.
5. Procure explicações comuns antes de concluir que algo é inexplicável.
`
    },
    {
        name: "catalogo_de_lendas.txt",
        desc: "Notas iniciais sobre lendas urbanas recorrentes.",
        content: `CATÁLOGO DE LENDAS — NOTAS

• A estrada muda: relatos sobre rádios que perdem sinal.
• O nome na lista: histórias sobre registros impossíveis.
• A janela acesa: prédios vazios com sinais de ocupação.

Notas ainda não verificadas. Consultar fontes locais antes de reproduzir como fato.
`
    },
    {
        name: "nota_04-B.txt",
        desc: "Nota de moderação com referência a um tópico pouco comentado.",
        content: `REGISTRO 04-B

Não confundir repetição com coincidência.
Três relatos independentes mencionam o mesmo detalhe: uma porta que não aparece nas fotografias.

Estado: inconclusivo.
Próxima ação: rever a origem das imagens e procurar uma explicação comum.
`
    },
    {
        name: "rascunho_sem_data.txt",
        desc: "Arquivo incompleto recuperado de uma pasta antiga.",
        content: `RASCUNHO SEM DATA

O relato foi publicado antes de a conta existir.
A data do servidor está correta. A data do arquivo também.

Não corrigir ainda. Fazer outra cópia e comparar amanhã.
`
    }
];

// ---------- 4. Seletores e estado ----------

const $ = (selector) => document.querySelector(selector);

const STORAGE = {
    nickname: "ai_nickname",
    posts: "ai_local_posts",
    comments: "ai_comments_"
};

function readStorage(key, fallback) {
    try {
        const value = localStorage.getItem(key);

        return value === null
            ? fallback
            : JSON.parse(value);
    } catch {
        return fallback;
    }
}

function saveStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch {
        return false;
    }
}

function readNickname() {
    try {
        return localStorage.getItem(STORAGE.nickname)
            || "visitante_anonimo";
    } catch {
        return "visitante_anonimo";
    }
}

let nickname = readNickname();

// Recupera tópicos criados anteriormente neste navegador.
const savedPosts = readStorage(STORAGE.posts, []);

if (Array.isArray(savedPosts)) {
    const validPosts = savedPosts.filter(
        (post) =>
            post &&
            typeof post.id === "string" &&
            post.id.startsWith("local_") &&
            typeof post.title === "string" &&
            typeof post.body === "string" &&
            Array.isArray(post.tags) &&
            Array.isArray(post.comments)
    );

    posts.unshift(...validPosts);
}

// ---------- 5. Funções auxiliares ----------

// Escapa texto antes de inseri-lo no HTML.
function esc(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

// Recupera os comentários salvos de um tópico.
function comments(post) {
    try {
        const saved = localStorage.getItem(
            STORAGE.comments + post.id
        );

        if (saved === null) {
            return post.comments;
        }

        const parsed = JSON.parse(saved);

        if (!Array.isArray(parsed)) {
            return post.comments;
        }

        return parsed.filter(
            (comment) =>
                comment &&
                typeof comment.author === "string" &&
                typeof comment.text === "string"
        );
    } catch {
        return post.comments;
    }
}

function saveComments(post) {
    return saveStorage(
        STORAGE.comments + post.id,
        post.comments
    );
}

// ---------- 6. Renderização dos tópicos ----------

function renderPosts(target, items) {
    if (!target) return;

    target.innerHTML = items.map((post) => `
        <article class="post-card">
            <div class="post-icon">${esc(post.icon)}</div>

            <div>
                <h3>
                    <button data-open="${esc(post.id)}">
                        ${esc(post.title)}
                    </button>
                </h3>

                <div class="meta">
                    por
                    <a href="#" data-member="${esc(post.author)}">
                        ${esc(post.author)}
                    </a>
                    • ${esc(post.date)}
                    • ${esc(post.category)}
                </div>

                <p class="excerpt">${esc(post.excerpt)}</p>

                <div class="tags">
                    ${post.tags.map((tag) => `
                        <span class="tag">${esc(tag)}</span>
                    `).join("")}

                    <span class="post-stats">
                        ${Number(post.views) || 0} visitas
                        • ${comments(post).length} resposta(s)
                    </span>
                </div>
            </div>
        </article>
    `).join("") || `
        <p class="muted">
            Nenhum tópico encontrado. Talvez tente outra busca.
        </p>
    `;
}

function refresh() {
    const searchInput = $("#searchInput");
    const categoryFilter = $("#categoryFilter");

    if (!searchInput || !categoryFilter) return;

    const query = searchInput.value.toLowerCase().trim();
    const category = categoryFilter.value;

    const filteredPosts = posts.filter((post) => {
        const matchesCategory =
            category === "Todas" || post.category === category;

        const searchableText = [
            post.title,
            post.excerpt,
            post.author,
            post.body,
            post.id,
            post.category,
            ...post.tags
        ].join(" ").toLowerCase();

        return matchesCategory &&
            (!query || searchableText.includes(query));
    });

    renderPosts($("#postList"), filteredPosts);

    const postCount = $("#postCount");
    const sidePostCount = $("#sidePostCount");

    if (postCount) {
        postCount.textContent =
            `${filteredPosts.length} de ${posts.length} tópicos`;
    }

    if (sidePostCount) {
        sidePostCount.textContent = posts.length;
    }

    // O índice mostra todos os tópicos, sem os filtros da página inicial.
    renderPosts($("#topicIndex"), posts);
}

// ---------- 7. Navegação entre páginas ----------

function view(name) {
    document.querySelectorAll(".view").forEach((element) => {
        element.classList.add("hidden");
    });

    $("#view-" + name)?.classList.remove("hidden");

    document.querySelectorAll(".nav-link").forEach((button) => {
        button.classList.toggle(
            "active",
            button.dataset.view === name
        );
    });

    if (name === "members") renderMembers();
    if (name === "archive") renderFiles();
}

// ---------- 8. Abrir uma discussão ----------

function openPost(id) {
    const post = posts.find((item) => item.id === id);

    if (!post) return;

    const dialog = $("#postDialog");
    const dialogBody = $("#dialogBody");

    if (!dialog || !dialogBody) return;

    const postComments = comments(post);

    $("#dialogTitle").textContent = "Tópico :: " + post.id;

    dialogBody.innerHTML = `
        <div class="post-detail">
            <div class="meta">
                ${esc(post.category)}
                • publicado por
                <a href="#" data-member="${esc(post.author)}">
                    ${esc(post.author)}
                </a>
                • ${esc(post.date)}
            </div>

            <h2>${esc(post.title)}</h2>

            <div class="body-text">${esc(post.body)}</div>

            <div class="tags">
                ${post.tags.map((tag) => `
                    <span class="tag">${esc(tag)}</span>
                `).join("")}
            </div>

            <h3>Respostas (${postComments.length})</h3>

            <div>
                ${postComments.map((comment) => `
                    <div class="comment">
                        <strong>${esc(comment.author)}</strong>
                        <p>${esc(comment.text)}</p>
                    </div>
                `).join("") || `
                    <p class="muted">
                        Ainda não há respostas.
                        Seja a primeira pessoa a comentar.
                    </p>
                `}
            </div>

            <div class="comment-form">
                <strong>Responder ao tópico</strong>

                <label class="tiny" for="commentText">
                    Sua mensagem
                </label>

                <textarea
                    id="commentText"
                    maxlength="2000"
                    placeholder="Escreva uma resposta respeitosa..."
                ></textarea>

                <button
                    class="button primary"
                    id="sendComment"
                    data-post="${esc(post.id)}"
                    type="button"
                >
                    Publicar resposta
                </button>

                <p class="tiny muted">
                    Protótipo local: as respostas ficam salvas
                    apenas neste navegador.
                </p>
            </div>
        </div>
    `;

    if (!dialog.open) {
        dialog.showModal();
    }
}

// ---------- 9. Lista e perfis de membros ----------

function renderMembers() {
    const target = $("#memberList");

    if (!target) return;

    target.innerHTML = members.map((member) => `
        <div class="member">
            <div class="avatar">${esc(member.avatar)}</div>

            <div>
                <h3>
                    <a href="#" data-member="${esc(member.name)}">
                        ${esc(member.name)}
                    </a>
                </h3>

                <p>
                    <strong>${esc(member.role)}</strong><br>
                    ${esc(member.bio)}
                </p>
            </div>
        </div>
    `).join("");
}

function memberProfile(name) {
    const member = members.find((item) => item.name === name);

    $("#dialogTitle").textContent = "Perfil de membro";

    if (!member) {
        $("#dialogBody").innerHTML = `
            <p>Perfil não encontrado.</p>
        `;
    } else {
        const contributions = posts.filter(
            (post) => post.author === member.name
        );

        $("#dialogBody").innerHTML = `
            <div class="member">
                <div class="avatar">${esc(member.avatar)}</div>

                <div>
                    <h3>${esc(member.name)}</h3>
                    <p><strong>${esc(member.role)}</strong></p>
                    <p>${esc(member.bio)}</p>
                    <p class="muted tiny">
                        Perfil fictício • membro da comunidade
                    </p>
                </div>
            </div>

            <h3>Últimas contribuições</h3>

            ${contributions.map((post) => `
                <p>
                    <a href="#" data-open="${esc(post.id)}">
                        ${esc(post.title)}
                    </a>
                </p>
            `).join("") || `
                <p class="muted">
                    Nenhuma publicação encontrada.
                </p>
            `}
        `;
    }

    const dialog = $("#postDialog");

    if (!dialog.open) {
        dialog.showModal();
    }
}

// ---------- 10. Biblioteca de documentos ----------

function renderFiles() {
    const target = $("#fileList");

    if (!target) return;

    target.innerHTML = docs.map((doc, index) => `
        <div class="file-item">
            <div class="file-icon">▤</div>

            <div>
                <strong>${esc(doc.name)}</strong>
                <p>${esc(doc.desc)}</p>
            </div>

            <button
                class="button"
                data-download="${index}"
                type="button"
            >
                Abrir / salvar
            </button>
        </div>
    `).join("");
}

function downloadDoc(index) {
    const doc = docs[index];

    if (!doc) return;

    const blob = new Blob(
        [doc.content],
        { type: "text/plain;charset=utf-8" }
    );

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = doc.name;

    document.body.appendChild(link);
    link.click();
    link.remove();

    // Libera a URL temporária depois de iniciar o download.
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// ---------- 11. Envio de novos relatos ----------

function newTopic() {
    $("#dialogTitle").textContent = "Enviar um relato";

    $("#dialogBody").innerHTML = `
        <form id="newTopicForm" class="comment-form">
            <label for="newTitle">Título</label>

            <input
                id="newTitle"
                required
                maxlength="100"
                placeholder="O que aconteceu?"
            >

            <label for="newCategory">Categoria</label>

            <select id="newCategory">
                <option>Relatos</option>
                <option>Lendas urbanas</option>
                <option>Pesquisa</option>
                <option>Locais</option>
            </select>

            <label for="newBody">Relato</label>

            <textarea
                id="newBody"
                required
                maxlength="2000"
                placeholder="Conte o que você observou. Separe fatos de suposições."
            ></textarea>

            <button class="button primary" type="submit">
                Publicar tópico
            </button>

            <p class="tiny muted">
                Os relatos são armazenados apenas neste navegador.
                Não envie dados pessoais.
            </p>
        </form>
    `;

    const dialog = $("#postDialog");

    if (!dialog.open) {
        dialog.showModal();
    }
}

function saveLocalPosts() {
    const localPosts = posts.filter(
        (post) => post.id.startsWith("local_")
    );

    return saveStorage(STORAGE.posts, localPosts);
}

// ---------- 12. Publicação de respostas ----------

function sendComment(button) {
    const post = posts.find(
        (item) => item.id === button.dataset.post
    );

    const textarea = $("#commentText");

    if (!post || !textarea) return;

    const text = textarea.value.trim();

    if (!text) {
        textarea.focus();
        return;
    }

    post.comments = comments(post);

    post.comments.push({
        author: nickname,
        text: text.slice(0, 2000)
    });

    saveComments(post);

    // Atualiza o contador e reabre a discussão.
    refresh();
    openPost(post.id);
}

// ---------- 13. Eventos de clique ----------

document.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof Element)) return;

    // Navegação.
    const viewButton = target.closest("[data-view]");

    if (viewButton) {
        event.preventDefault();
        view(viewButton.dataset.view);
        return;
    }

    // Abrir tópico.
    const openButton = target.closest("[data-open]");

    if (openButton) {
        event.preventDefault();
        openPost(openButton.dataset.open);
        return;
    }

    // Abrir perfil.
    const memberButton = target.closest("[data-member]");

    if (memberButton) {
        event.preventDefault();
        memberProfile(memberButton.dataset.member);
        return;
    }

    // Abrir ou salvar documento.
    const downloadButton = target.closest("[data-download]");

    if (downloadButton) {
        downloadDoc(Number(downloadButton.dataset.download));
        return;
    }

    // Publicar resposta.
    const commentButton = target.closest("#sendComment");

    if (commentButton) {
        sendComment(commentButton);
        return;
    }
});

// ---------- 14. Formulário de novos tópicos ----------

document.addEventListener("submit", (event) => {
    if (event.target.id !== "newTopicForm") return;

    event.preventDefault();

    const title = $("#newTitle").value.trim();
    const body = $("#newBody").value.trim();
    const category = $("#newCategory").value;

    if (!title || !body) return;

    const post = {
        id: "local_" + Date.now().toString(36),
        title: title.slice(0, 100),
        category,
        author: nickname,
        date: "agora",
        views: 0,
        icon: "✎",
        tags: ["novo relato"],
        excerpt: body.slice(0, 145) +
            (body.length > 145 ? "…" : ""),
        body: body.slice(0, 2000),
        comments: []
    };

    posts.unshift(post);

    const saved = saveLocalPosts();

    $("#postDialog").close();

    $("#searchInput").value = "";
    $("#categoryFilter").value = "Todas";

    refresh();
    view("home");

    if (!saved) {
        console.warn(
            "Não foi possível salvar os tópicos neste navegador."
        );
    }
});

// ---------- 15. Pesquisa e filtros ----------

$("#searchInput").addEventListener("input", refresh);

$("#categoryFilter").addEventListener("change", refresh);

// ---------- 16. Botões da página inicial ----------

$("#browseBtn").addEventListener("click", () => {
    view("topics");

    $("#view-topics").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

$("#newTopicBtn").addEventListener("click", newTopic);

// ---------- 17. Apelido do visitante ----------

$("#saveNick").addEventListener("click", () => {
    const input = $("#nickname");

    const name = input.value
        .trim()
        .replace(/[<>]/g, "")
        .slice(0, 24);

    if (!name) {
        $("#nickStatus").textContent =
            "Digite um apelido primeiro.";

        return;
    }

    nickname = name;

    try {
        localStorage.setItem(STORAGE.nickname, nickname);
    } catch {
        // O apelido ainda funciona durante esta sessão.
    }

    $("#nickname").value = nickname;

    $("#nickStatus").textContent =
        "Navegando como " + nickname + ".";
});

$("#nickname").value = nickname;

$("#nickStatus").textContent =
    "Navegando como " + nickname + ".";

// ---------- 18. Nota secreta ----------

$("#secretBtn").addEventListener("click", () => {
    $("#secretContent").classList.toggle("hidden");
});

// ---------- 19. Relato aleatório ----------

$("#randomPostLink").addEventListener("click", (event) => {
    event.preventDefault();

    if (!posts.length) return;

    const randomIndex = Math.floor(
        Math.random() * posts.length
    );

    openPost(posts[randomIndex].id);
});

// ---------- 20. Inicialização ----------

function initializeSite() {
    refresh();
    renderMembers();
    renderFiles();

    // Contador decorativo, não representa visitantes reais.
    $("#visitorCount").textContent = String(
        4 + Math.floor(Math.random() * 13)
    ).padStart(2, "0");

    $("#lastUpdated").textContent =
        "hoje, " +
        new Date().toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit"
        });
}

initializeSite();