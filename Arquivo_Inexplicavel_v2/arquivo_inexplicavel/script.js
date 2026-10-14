// ARQUIVO INEXPLICÁVEL
// JavaScript — Fórum de investigação e relatos

// 1. DADOS DOS TÓPICOS

const posts = [
    {
        id: "p01",
        title: "Luzes acesas no prédio que está vazio há vinte anos",
        category: "Locais",
        author: "coruja_de_cobre",
        date: "12/08/2004",
        views: 184,
        replies: 3,
        icon: "▧",
        tags: ["prédio abandonado", "luzes"],
        excerpt: "Passei por lá de ônibus durante três noites seguidas. Sempre havia uma luz no terceiro andar. O lugar está fechado desde que me mudei para o bairro.",
        body: "Alguém conhece a história do antigo prédio perto da estação? O zelador do mercado diz que não há energia ligada há anos, mas eu vi a mesma janela iluminada em noites diferentes.\n\nNão fui até lá e não recomendo que ninguém entre. Estou tentando encontrar notícias antigas sobre o lugar. Se alguém tiver recortes de jornal ou souber o nome do edifício, agradeço.",
        comments: [
            {
                author: "morcego_manso",
                text: "Pode ser reflexo de algum carro. Você lembra o horário?"
            },
            {
                author: "linha_fantasma",
                text: "Tem uma matéria antiga sobre um incêndio na região, mas não sei se é o mesmo prédio."
            },
            {
                author: "coruja_de_cobre",
                text: "Por volta de 23h40. Vou procurar o arquivo do jornal local."
            }
        ]
    },

    {
        id: "p02",
        title: "A estrada onde o rádio sempre perde a estação",
        category: "Relatos",
        author: "linha_fantasma",
        date: "10/08/2004",
        views: 96,
        replies: 2,
        icon: "♫",
        tags: ["estrada", "rádio"],
        excerpt: "Minha família chama de curva muda. O rádio chia por alguns segundos, mesmo com o carro parado e o motor desligado.",
        body: "Isso acontece numa estrada que atravessa uma área de mata. Meu pai diz que é interferência, e provavelmente é. Só acho estranho que o relógio do painel também atrasou alguns minutos na última vez.\n\nNão estou dizendo que é paranormal. Queria saber se mais alguém já percebeu algo parecido naquela região.",
        comments: [
            {
                author: "arquivo_morto",
                text: "Interferência e relógios ruins podem explicar muita coisa. Você tem a localização aproximada?"
            },
            {
                author: "morcego_manso",
                text: "Já ouvi uma história parecida, mas era sobre uma fita cassete que repetia a mesma frase."
            }
        ]
    },

    {
        id: "p03",
        title: "Catálogo de símbolos encontrados em casas antigas",
        category: "Pesquisa",
        author: "arquivo_morto",
        date: "08/08/2004",
        views: 212,
        replies: 4,
        icon: "⌘",
        tags: ["símbolos", "arquitetura", "04-B"],
        excerpt: "Estou organizando fotografias de marcas em batentes e porões. Algumas parecem decoração; outras se repetem em cidades diferentes.",
        body: "Estou montando um catálogo de marcas que aparecem em construções antigas. A maioria tem explicações comuns: marcas de carpinteiro, símbolos religiosos ou rabiscos de moradores.\n\nMas três fotografias enviadas por pessoas diferentes mostram um desenho quase idêntico, sempre perto de uma porta interna. Não consegui confirmar se as imagens têm alguma relação.\n\nNota: registro 04-B. A terceira fotografia está sem data e o remetente não respondeu.",
        comments: [
            {
                author: "coruja_de_cobre",
                text: "Você pretende publicar as imagens em resolução maior?"
            },
            {
                author: "linha_fantasma",
                text: "Cuidado para não misturar símbolos parecidos de tradições diferentes."
            },
            {
                author: "arquivo_morto",
                text: "Vou colocar versões reduzidas na biblioteca depois de remover informações pessoais."
            },
            {
                author: "visitante_17",
                text: "A terceira foto parece ter uma sombra atrás da porta."
            }
        ]
    },

    {
        id: "p04",
        title: "O nome que aparece em listas telefônicas antigas",
        category: "Lendas urbanas",
        author: "morcego_manso",
        date: "02/08/2004",
        views: 73,
        replies: 1,
        icon: "☎",
        tags: ["lenda urbana", "arquivo"],
        excerpt: "Uma brincadeira local diz para nunca procurar o próprio nome em listas antigas. Resolvi pesquisar a origem e encontrei versões diferentes.",
        body: "A história muda dependendo de quem conta. Em uma versão, o nome aparece ao lado de um número que não existe. Em outra, a pessoa encontra o próprio endereço, mas com uma data futura.\n\nAté agora só achei relatos de segunda mão. Se alguém souber de onde isso veio, gostaria de comparar versões.",
        comments: [
            {
                author: "arquivo_morto",
                text: "Parece uma variação de lendas sobre telefonemas do futuro. Vou procurar referências impressas."
            }
        ]
    },

    {
        id: "p05",
        title: "Relatório 04-B: a porta ausente",
        category: "Pesquisa",
        author: "admin",
        date: "01/08/2004",
        views: 19,
        replies: 0,
        icon: "▣",
        tags: ["04-B", "fotografia", "restrito"],
        excerpt: "Três fotografias. Três endereços. A mesma parede — ou a mesma ausência.",
        body: "Rascunho pessoal — não publicar fora do fórum.\n\nAs fotografias foram enviadas em semanas diferentes e atribuídas a locais sem relação aparente. Em todas, o corredor termina numa parede lisa. Os remetentes descrevem uma porta naquele ponto.\n\nNão tenho negativos, metadados confiáveis ou testemunhas independentes. Pode ser erro de memória, compressão, edição ou uma brincadeira coordenada. Não descartar explicações simples.\n\nPróximo passo: verificar as datas originais e localizar os prédios sem contatar os remetentes novamente.",
        comments: []
    },

    {
    id: "p06",
    title: "A transmissão que apareceu depois que a gravação terminou",
    category: "Relatos",
    author: "visitante_17",
    date: "29/07/2004",
    views: 341,
    replies: 5,
    icon: "♫",
    tags: ["gravação", "rádio", "áudio", "interferência"],
    excerpt: "O gravador ficou ligado por mais onze segundos depois que a fita acabou. Não sei como isso é possível, mas a última frase não foi dita por ninguém que estava na sala.",
    body: "Encontrei uma fita cassete numa caixa de coisas antigas do meu pai. A etiqueta dizia apenas 'cozinha — terça-feira'. Como ele costumava gravar programas de rádio por cima de outras fitas, achei que fosse alguma coisa desse tipo.\n\nNos primeiros minutos, só dá para ouvir conversas comuns, louça e uma televisão ligada ao fundo. Então a gravação termina abruptamente. Pelo menos era o que eu pensava.\n\nQuando digitalizei o áudio, descobri mais onze segundos depois do ponto em que a fita parece acabar. Há um chiado baixo e, depois, uma voz dizendo: 'Você ainda está ouvindo?'\n\nA voz parece vir de muito perto do microfone. O problema é que a fita foi gravada antes de eu nascer, e meu pai afirma que estava sozinho naquela tarde. Não reconheço a voz, mas há uma pausa antes da pergunta que lembra bastante o jeito como ele fala.\n\nTentei limpar o ruído e comparar com outras gravações da fita. Não cheguei a nenhuma conclusão. Pode ser uma sobreposição de áudio ou algum defeito do aparelho.\n\nNão vou publicar o arquivo completo por enquanto. Se alguém souber explicar como uma fita pode registrar áudio além do trecho esperado, gostaria de entender.",
    comments: [
        {
            author: "linha_fantasma",
            text: "Uma fita não deveria ganhar onze segundos extras sozinha. Você conferiu se o áudio digitalizado não continuou depois do fim real da gravação?"
        },
        {
            author: "arquivo_morto",
            text: "Antes de tirar conclusões, confira o cabeçalho do arquivo e a duração original. Alguns programas acrescentam silêncio ou interpretam o final de maneira estranha."
        },
        {
            author: "morcego_manso",
            text: "Meu avô guardava fitas com gravações por cima de gravações. Às vezes apareciam pedaços de conversas antigas no meio de outra coisa."
        },
        {
            author: "visitante_17",
            text: "Eu pensei nisso também. Só que a voz está muito mais nítida do que o restante do áudio."
        },
        {
            author: "coruja_de_cobre",
            text: "Guarde uma cópia sem alterações e anote de onde a fita veio. Se encontrar a data exata, talvez seja possível cruzar com outras informações."
        }
    ]
},

{
    id: "p07",
    title: "Alguém reconhece esta casa? A fotografia é de 1998",
    category: "Investigação",
    author: "janela_azul",
    date: "25/07/2004",
    views: 527,
    replies: 6,
    icon: "▧",
    tags: ["fotografia", "casa antiga", "família", "arquivo"],
    excerpt: "Encontrei esta foto no verso de um retrato de família. A casa aparece em outras fotografias, mas existe um detalhe que muda de lugar em todas elas.",
    body: "Estou tentando identificar uma casa que aparece em fotografias antigas encontradas numa caixa comprada num mercado de usados. A maioria das imagens tem datas entre 1996 e 1999, mas não há nomes ou endereços escritos no verso.\n\nA casa é relativamente comum: dois andares, uma varanda estreita e uma janela comprida ao lado da porta de entrada. Não consigo identificar a cidade pelo fundo das imagens.\n\nO estranho é que, em três fotografias diferentes, a janela aparece em posições ligeiramente distintas. Na primeira, fica à esquerda da porta. Na segunda, parece estar à direita. Na terceira, não aparece janela alguma, embora a parede tenha o mesmo formato.\n\nAs fotos não parecem montagens óbvias. O papel envelheceu de maneira semelhante e duas delas têm marcas de revelação que parecem indicar o mesmo laboratório. Isso não prova que foram tiradas no mesmo lugar ou na mesma época.\n\nTalvez eu esteja comparando casas parecidas. Ainda assim, queria descobrir se alguém reconhece a construção ou se existe algum método para identificar o local usando apenas as imagens.\n\nPosso publicar versões digitalizadas depois de verificar se não há informações pessoais nas fotografias.",
    comments: [
        {
            author: "arquivo_morto",
            text: "Veja se o verso tem marcas do laboratório fotográfico ou números de lote. Às vezes ajudam a estabelecer uma origem aproximada."
        },
        {
            author: "coruja_de_cobre",
            text: "Casas antigas passam por reformas. Você comparou a posição das árvores, dos degraus e das sombras?"
        },
        {
            author: "janela_azul",
            text: "Sim. O degrau da entrada e uma rachadura no muro parecem iguais nas três fotos."
        },
        {
            author: "morcego_manso",
            text: "Isso me lembrou uma história da minha cidade sobre uma casa que aparecia em fotografias de famílias que nunca tinham se conhecido. Nunca encontrei uma fonte confiável."
        },
        {
            author: "visitante_17",
            text: "Você disse que encontrou as fotos numa caixa. Havia outras imagens que não mostravam a casa?"
        },
        {
            author: "admin",
            text: "Tópico mantido aberto para comparação de fontes. Não publiquem endereços residenciais ou tentem identificar pessoas privadas a partir das fotografias."
        }
    ]
}
];


// 2. DADOS DOS MEMBROS

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
        name: "admin",
        role: "Administrador",
        bio: "Mantém o arquivo organizado desde 2026.",
        avatar: "?"
    },
    {
        name: "visitante_17",
        role: "Novato",
        bio: "Ainda tentando entender o que é coincidência.",
        avatar: "☻"
    },
    
    {
        name: "janela_azul",
        role: "Colaborador ocasional",
        bio: "Fotografias antigas, casas sem endereço e arquivos de família.",
        avatar: "▧"
    }
];


// 3. DOCUMENTOS DO ARQUIVO

const docs = [
    {
        name: "guia_de_pesquisa.txt",
        desc: "Como registrar relatos sem expor testemunhas.",
        content: "ARQUIVO INEXPLICÁVEL — GUIA DE PESQUISA\n\n1. Registre a data e a origem do relato.\n2. Separe observação direta de informação ouvida de terceiros.\n3. Guarde cópias sem alterar os originais.\n4. Evite publicar nomes, endereços ou dados pessoais.\n5. Procure explicações comuns antes de concluir que algo é inexplicável.\n"
    },

    {
        name: "catalogo_de_lendas.txt",
        desc: "Notas iniciais sobre lendas urbanas recorrentes.",
        content: "CATÁLOGO DE LENDAS — NOTAS\n\n• A estrada muda: relatos sobre rádios que perdem sinal.\n• O nome na lista: histórias sobre registros impossíveis.\n• A janela acesa: prédios vazios com sinais de ocupação.\n\nNotas ainda não verificadas. Consultar fontes locais antes de reproduzir como fato.\n"
    },

    {
        name: "nota_04-B.txt",
        desc: "Nota administrativa com referência a um tópico pouco comentado.",
        content: "REGISTRO 04-B\n\nNão confundir repetição com coincidência.\nTrês relatos independentes mencionam o mesmo detalhe: uma porta que não aparece nas fotografias.\n\nEstado: inconclusivo.\nPróxima ação: rever a origem das imagens e procurar uma explicação comum.\n"
    }
];


// 4. ELEMENTOS DO HTML E ESTADO DA APLICAÇÃO

// Atalho para selecionar elementos do documento.
const $ = selector => document.querySelector(selector);

// Elementos principais.
const postList = $("#postList");
const topicIndex = $("#topicIndex");

// Estado atual da navegação.
let currentView = "home";

// Apelido salvo no navegador.
let nickname =
    localStorage.getItem("ai_nickname") || "visitante_anonimo";


// 5. FUNÇÕES AUXILIARES

/** Escapa caracteres especiais para evitar que textos
 * dinâmicos sejam interpretados como HTML. */
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}


/**
 * Retorna os comentários salvos no navegador.
 * Caso não existam, utiliza os comentários originais. */
function getComments(post) {
    if (!post) {
        return [];
    }

    try {
        const savedComments = localStorage.getItem(
            "ai_comments_" + post.id
        );

        return savedComments !== null
            ? JSON.parse(savedComments)
            : post.comments;

    } catch {
        return post.comments;
    }
}


// 6. RENDERIZAÇÃO DOS TÓPICOS

/** Exibe uma lista de tópicos dentro de um elemento HTML. */
function renderPosts(target, items) {
    if (!target) {
        return;
    }

    target.innerHTML = items.map(post => `
        <article class="post-card">

            <div class="post-icon">
                ${escapeHTML(post.icon)}
            </div>

            <div>
                <h3>
                    <button data-open="${escapeHTML(post.id)}">
                        ${escapeHTML(post.title)}
                    </button>
                </h3>

                <div class="meta">
                    por
                    <a href="#" data-member="${escapeHTML(post.author)}">
                        ${escapeHTML(post.author)}
                    </a>
                    • ${escapeHTML(post.date)}
                    • ${escapeHTML(post.category)}
                </div>

                <p class="excerpt">
                    ${escapeHTML(post.excerpt)}
                </p>

                <div class="tags">
                    ${post.tags.map(tag => `
                        <span class="tag">
                            ${escapeHTML(tag)}
                        </span>
                    `).join("")}

                    <span class="post-stats">
                        ${post.views} visitas •
                        ${getComments(post).length} resposta(s)
                    </span>
                </div>
            </div>

        </article>
    `).join("");
}


/** Filtra tópicos por texto e categoria. */
function filteredPosts() {
    const searchInput = $("#searchInput");
    const categoryFilter = $("#categoryFilter");

    const query = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";

    const category = categoryFilter
        ? categoryFilter.value
        : "Todas";

    return posts.filter(post => {
        const matchesCategory =
            category === "Todas" || post.category === category;

        const searchableContent = [
            post.title,
            post.excerpt,
            post.author,
            post.body,
            post.id,
            post.category,
            ...post.tags
        ].join(" ").toLowerCase();

        const matchesQuery =
            query === "" || searchableContent.includes(query);

        return matchesCategory && matchesQuery;
    });
}


/** Atualiza a página inicial e o índice de tópicos. */
function refreshHome() {
    const items = filteredPosts();

    renderPosts(postList, items);

    if ($("#postCount")) {
        $("#postCount").textContent =
            items.length + " tópicos";
    }

    if ($("#sidePostCount")) {
        $("#sidePostCount").textContent = posts.length;
    }

    renderPosts(topicIndex, posts);
}


// 7. NAVEGAÇÃO ENTRE PÁGINAS

/** Alterna entre as diferentes visualizações do site. */
function showView(name) {
    currentView = name;

    document.querySelectorAll(".view").forEach(view => {
        view.classList.add("hidden");
    });

    const target = $("#view-" + name);

    if (target) {
        target.classList.remove("hidden");
    }

    document.querySelectorAll(".nav-link").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.view === name
        );
    });

    // Atualiza conteúdos específicos de cada página.
    if (name === "members") {
        renderMembers();
    }

    if (name === "archive") {
        renderFiles();
    }
}


// 8. ABERTURA E VISUALIZAÇÃO DE TÓPICOS

/** Abre um tópico em uma janela de diálogo. */
function openPost(id) {
    const post = posts.find(item => item.id === id);

    if (!post) {
        return;
    }

    const comments = getComments(post);

    $("#dialogTitle").textContent = "Tópico :: " + post.id;

    $("#dialogBody").innerHTML = `
        <div class="post-detail">

            <div class="meta">
                ${escapeHTML(post.category)}
                • publicado por
                <a href="#" data-member="${escapeHTML(post.author)}">
                    ${escapeHTML(post.author)}
                </a>
                • ${escapeHTML(post.date)}
            </div>

            <h2>
                ${escapeHTML(post.title)}
            </h2>

            <div class="body-text">
                ${escapeHTML(post.body)}
            </div>

            <div class="tags">
                ${post.tags.map(tag => `
                    <span class="tag">
                        ${escapeHTML(tag)}
                    </span>`).join("")}
            </div>

            <h3>
                Respostas (${comments.length})
            </h3>

            <div id="commentsArea">
                ${
                    comments.map(comment => `
                        <div class="comment">
                            <strong>
                                ${escapeHTML(comment.author)}
                            </strong>

                            <p>
                                ${escapeHTML(comment.text)}
                            </p>
                        </div>`).join("")
                    ||
                    '<p class="muted">Ainda não há respostas. Seja a primeira pessoa a comentar.</p>'
                }
            </div>

            <div class="comment-form">

                <strong>Responder ao tópico</strong>

                <label class="tiny" for="commentText">
                    Sua mensagem
                </label>

                <textarea
                    id="commentText"
                    placeholder="Escreva uma resposta respeitosa...">
                </textarea>

                <button
                    class="button primary"
                    id="sendComment"
                    data-post="${escapeHTML(post.id)}">
                    Publicar resposta
                </button>

                <p class="tiny muted">
                    Protótipo local: as respostas ficam salvas
                    apenas neste navegador.
                </p>
            </div>
        </div>`;

    $("#postDialog").showModal();
}


// 9. MEMBROS E PERFIS

/** Exibe os membros cadastrados no site. */
function renderMembers() {
    const memberList = $("#memberList");

    if (!memberList) {
        return;
    }

    memberList.innerHTML = members.map(member => `
        <div class="member">

            <div class="avatar">
                ${escapeHTML(member.avatar)}
            </div>

            <div>
                <h3>
                    <a href="#" data-member="${escapeHTML(member.name)}">
                        ${escapeHTML(member.name)}
                    </a>
                </h3>

                <p>
                    <strong>
                        ${escapeHTML(member.role)}
                    </strong>
                    <br>
                    ${escapeHTML(member.bio)}
                </p>
            </div>
        </div>`
    ).join("");
}


/**Abre o perfil de um membro e lista suas contribuições. */
function showMember(name) {
    const member = members.find(item => item.name === name);

    $("#dialogTitle").textContent = "Perfil de membro";

    if (!member) {
        $("#dialogBody").innerHTML =
            "<p>Perfil não encontrado.</p>";

        $("#postDialog").showModal();
        return;
    }

    const contributions = posts.filter(
        post => post.author === member.name
    );

    $("#dialogBody").innerHTML = `
        <div class="member">

            <div class="avatar">
                ${escapeHTML(member.avatar)}
            </div>

            <div>
                <h3>
                    ${escapeHTML(member.name)}
                </h3>

                <p>
                    <strong>
                        ${escapeHTML(member.role)}
                    </strong>
                </p>

                <p>
                    ${escapeHTML(member.bio)}
                </p>

                <p class="muted tiny">
                    Perfil fictício • membro da comunidade
                </p>
            </div>
        </div>
        <h3>Últimas contribuições</h3>

        ${
            contributions.map(post => `
                <p>
                    <a href="#" data-open="${escapeHTML(post.id)}">
                        ${escapeHTML(post.title)}
                    </a>
                </p>`
            ).join("")
            ||
            "<p class='muted'>Nenhuma publicação encontrada.</p>"
        }`;

    $("#postDialog").showModal();
}


// 10. ARQUIVOS E DOCUMENTOS

/** Exibe a lista de documentos disponíveis. */
function renderFiles() {
    const fileList = $("#fileList");

    if (!fileList) {
        return;
    }

    fileList.innerHTML = docs.map((doc, index) => `
        <div class="file-item">

            <div class="file-icon">▤</div>

            <div>
                <strong>
                    ${escapeHTML(doc.name)}
                </strong>

                <p>
                    ${escapeHTML(doc.desc)}
                </p>
            </div>

            <button
                class="button"
                data-download="${index}"
            >
                Abrir / salvar
            </button>

        </div>`
    ).join("");
}


/**Gera e baixa um documento de texto. */
function downloadDoc(index) {
    const doc = docs[index];

    if (!doc) {
        return;
    }

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

    // Libera a URL temporária após iniciar o download.
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}


// 11. CRIAÇÃO DE NOVOS TÓPICOS

/** Abre o formulário de publicação de um novo relato. */
function openNewTopic() {
    $("#dialogTitle").textContent = "Enviar um relato";

    $("#dialogBody").innerHTML = `
        <form id="newTopicForm" class="comment-form">

            <label for="newTitle">
                Título
            </label>

            <input
                id="newTitle"
                required
                maxlength="100"
                placeholder="O que aconteceu?">

            <label for="newCategory">
                Categoria
            </label>

            <select id="newCategory">
                <option>Relatos</option>
                <option>Lendas urbanas</option>
                <option>Pesquisa</option>
                <option>Locais</option>
            </select>

            <label for="newBody">
                Relato
            </label>

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
                Esta versão salva o tópico apenas na sessão atual;
                comentários são guardados neste navegador.
                Não envie dados pessoais.
            </p>

        </form>`;

    $("#postDialog").showModal();
}


/** Processa o formulário de criação de tópicos. */
function handleNewTopic(event) {
    if (event.target.id !== "newTopicForm") {
        return;
    }

    event.preventDefault();

    const title = $("#newTitle").value.trim();
    const body = $("#newBody").value.trim();
    const category = $("#newCategory").value;

    if (!title || !body) {
        return;
    }

    const id = "local_" + Date.now().toString(36);

    const newPost = {
        id,
        title,
        category,
        author: nickname,
        date: new Date().toLocaleDateString("pt-BR"),
        views: 0,
        replies: 0,
        icon: "✎",
        tags: ["novo relato"],
        excerpt:
            body.slice(0, 145) +
            (body.length > 145 ? "…" : ""),
        body,
        comments: []
    };

    posts.unshift(newPost);

    $("#postDialog").close();

    $("#searchInput").value = "";
    $("#categoryFilter").value = "Todas";

    refreshHome();
    showView("home");
}


// 12. EVENTOS GLOBAIS

/**Gerencia cliques em elementos criados dinamicamente.*/
document.addEventListener("click", event => {

    // Navegação entre páginas.
    const viewButton = event.target.closest("[data-view]");

    if (viewButton) {
        event.preventDefault();
        showView(viewButton.dataset.view);
        return;
    }

    // Abertura de tópicos.
    const postButton = event.target.closest("[data-open]");

    if (postButton) {
        event.preventDefault();
        openPost(postButton.dataset.open);
        return;
    }

    // Visualização de perfis.
    const memberButton = event.target.closest("[data-member]");

    if (memberButton) {
        event.preventDefault();
        showMember(memberButton.dataset.member);
        return;
    }

    // Download de documentos.
    const downloadButton = event.target.closest("[data-download]");

    if (downloadButton) {
        downloadDoc(Number(downloadButton.dataset.download));
        return;
    }

    // Publicação de comentários.
    if (event.target.id === "sendComment") {
        const id = event.target.dataset.post;
        const post = posts.find(item => item.id === id);
        const textarea = $("#commentText");

        if (!post || !textarea) {
            return;
        }

        const text = textarea.value.trim();

        if (!text) {
            textarea.focus();
            return;
        }

        const comments = getComments(post);

        comments.push({
            author: nickname,
            text
        });

        try {
            localStorage.setItem(
                "ai_comments_" + id,
                JSON.stringify(comments)
            );
        } catch {
            alert(
                "Não foi possível salvar a resposta neste navegador."
            );
            return;
        }

        openPost(id);
        refreshHome();
    }
});


/* 13. EVENTOS DOS FORMULÁRIOS */

// Pesquisa de tópicos.
$("#searchInput").addEventListener("input", refreshHome);

// Filtro por categoria.
$("#categoryFilter").addEventListener("change", refreshHome);

// Envio de novos tópicos.
document.addEventListener("submit", handleNewTopic);


// 14. BOTÕES E AÇÕES ESPECÍFICAS

// Navegar até os tópicos.
$("#browseBtn").addEventListener("click", () => {
    showView("topics");

    document
        .querySelector(".section-heading")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
});


// Abrir formulário de novo tópico.
$("#newTopicBtn").addEventListener("click", openNewTopic);


// Salvar apelido.
$("#saveNick").addEventListener("click", () => {
    const input = $("#nickname");

    const value = input.value
        .trim()
        .replace(/[<>]/g, "")
        .slice(0, 24);

    if (!value) {
        $("#nickStatus").textContent =
            "Digite um apelido primeiro.";

        return;
    }

    nickname = value;

    localStorage.setItem("ai_nickname", nickname);

    $("#nickStatus").textContent =
        "Navegando como " + nickname + ".";
});


// Mostrar apelido atual.
$("#nickname").value = nickname;

$("#nickStatus").textContent =
    "Navegando como " + nickname + ".";


// Mostrar ou esconder conteúdo secreto.
$("#secretBtn").addEventListener("click", () => {
    $("#secretContent").classList.toggle("hidden");
});


// Abrir um tópico aleatório.
$("#randomPostLink").addEventListener("click", event => {
    event.preventDefault();

    const randomIndex = Math.floor(
        Math.random() * posts.length
    );

    const post = posts[randomIndex];

    if (post) {
        openPost(post.id);
    }
});


// 15. INICIALIZAÇÃO DO SITE

// Atualiza a página inicial.
refreshHome();

// Prepara a lista de membros.
renderMembers();

// Prepara a biblioteca de documentos.
renderFiles();
