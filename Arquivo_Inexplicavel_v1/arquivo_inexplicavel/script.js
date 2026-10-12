const posts = [
 {id:"p01",title:"Luzes acesas no prédio que está vazio há vinte anos",category:"Locais",author:"coruja_de_cobre",date:"12/08/2004",views:184,replies:3,icon:"▧",tags:["prédio abandonado","luzes"],excerpt:"Passei por lá de ônibus durante três noites seguidas. Sempre havia uma luz no terceiro andar. O lugar está fechado desde que me mudei para o bairro.",body:"Alguém conhece a história do antigo prédio perto da estação? O zelador do mercado diz que não há energia ligada há anos, mas eu vi a mesma janela iluminada em noites diferentes.\\n\\nNão fui até lá e não recomendo que ninguém entre. Estou tentando encontrar notícias antigas sobre o lugar. Se alguém tiver recortes de jornal ou souber o nome do edifício, agradeço.",comments:[{author:"morcego_manso",text:"Pode ser reflexo de algum carro. Você lembra o horário?"},{author:"linha_fantasma",text:"Tem uma matéria antiga sobre um incêndio na região, mas não sei se é o mesmo prédio."},{author:"coruja_de_cobre",text:"Por volta de 23h40. Vou procurar o arquivo do jornal local."}]},
 {id:"p02",title:"A estrada onde o rádio sempre perde a estação",category:"Relatos",author:"linha_fantasma",date:"10/08/2004",views:96,replies:2,icon:"♫",tags:["estrada","rádio"],excerpt:"Minha família chama de curva muda. O rádio chia por alguns segundos, mesmo com o carro parado e o motor desligado.",body:"Isso acontece numa estrada que atravessa uma área de mata. Meu pai diz que é interferência, e provavelmente é. Só acho estranho que o relógio do painel também atrasou alguns minutos na última vez.\\n\\nNão estou dizendo que é paranormal. Queria saber se mais alguém já percebeu algo parecido naquela região.",comments:[{author:"arquivo_morto",text:"Interferência e relógios ruins podem explicar muita coisa. Você tem a localização aproximada?"},{author:"morcego_manso",text:"Já ouvi uma história parecida, mas era sobre uma fita cassete que repetia a mesma frase."}]},
 {id:"p03",title:"Catálogo de símbolos encontrados em casas antigas",category:"Pesquisa",author:"arquivo_morto",date:"08/08/2004",views:212,replies:4,icon:"⌘",tags:["símbolos","arquitetura","04-B"],excerpt:"Estou organizando fotografias de marcas em batentes e porões. Algumas parecem decoração; outras se repetem em cidades diferentes.",body:"Estou montando um catálogo de marcas que aparecem em construções antigas. A maioria tem explicações comuns: marcas de carpinteiro, símbolos religiosos ou rabiscos de moradores.\\n\\nMas três fotografias enviadas por pessoas diferentes mostram um desenho quase idêntico, sempre perto de uma porta interna. Não consegui confirmar se as imagens têm alguma relação.\\n\\nNota: registro 04-B. A terceira fotografia está sem data e o remetente não respondeu.",comments:[{author:"coruja_de_cobre",text:"Você pretende publicar as imagens em resolução maior?"},{author:"linha_fantasma",text:"Cuidado para não misturar símbolos parecidos de tradições diferentes."},{author:"arquivo_morto",text:"Vou colocar versões reduzidas na biblioteca depois de remover informações pessoais."},{author:"visitante_17",text:"A terceira foto parece ter uma sombra atrás da porta."}]},
 {id:"p04",title:"O nome que aparece em listas telefônicas antigas",category:"Lendas urbanas",author:"morcego_manso",date:"02/08/2004",views:73,replies:1,icon:"☎",tags:["lenda urbana","arquivo"],excerpt:"Uma brincadeira local diz para nunca procurar o próprio nome em listas antigas. Resolvi pesquisar a origem e encontrei versões diferentes.",body:"A história muda dependendo de quem conta. Em uma versão, o nome aparece ao lado de um número que não existe. Em outra, a pessoa encontra o próprio endereço, mas com uma data futura.\\n\\nAté agora só achei relatos de segunda mão. Se alguém souber de onde isso veio, gostaria de comparar versões.",comments:[{author:"arquivo_morto",text:"Parece uma variação de lendas sobre telefonemas do futuro. Vou procurar referências impressas."}]},
 {id:"p05",title:"Relatório 04-B: a porta ausente",category:"Pesquisa",author:"admin",date:"01/08/2004",views:19,replies:0,icon:"▣",tags:["04-B","fotografia","restrito"],excerpt:"Três fotografias. Três endereços. A mesma parede — ou a mesma ausência.",body:"Rascunho pessoal — não publicar fora do fórum.\\n\\nAs fotografias foram enviadas em semanas diferentes e atribuídas a locais sem relação aparente. Em todas, o corredor termina numa parede lisa. Os remetentes descrevem uma porta naquele ponto.\\n\\nNão tenho negativos, metadados confiáveis ou testemunhas independentes. Pode ser erro de memória, compressão, edição ou uma brincadeira coordenada. Não descartar explicações simples.\\n\\nPróximo passo: verificar as datas originais e localizar os prédios sem contatar os remetentes novamente.",comments:[]}
];
const members = [
 {name:"coruja_de_cobre",role:"Membro antigo",bio:"Recortes de jornal, prédios esquecidos e histórias locais.",avatar:"☾"},
 {name:"linha_fantasma",role:"Pesquisador amador",bio:"Rádios, gravações e fenômenos de estrada.",avatar:"〰"},
 {name:"arquivo_morto",role:"Bibliotecário",bio:"Digitaliza documentos e compara fontes antigas.",avatar:"▤"},
 {name:"morcego_manso",role:"Curioso",bio:"Folclore, lendas urbanas e histórias de família.",avatar:"♧"},
 {name:"admin",role:"Administrador",bio:"Mantém o arquivo organizado desde 2004.",avatar:"?"},
 {name:"visitante_17",role:"Novato",bio:"Ainda tentando entender o que é coincidência.",avatar:"☻"}
];
const docs = [
 {name:"guia_de_pesquisa.txt",desc:"Como registrar relatos sem expor testemunhas.",content:"ARQUIVO INEXPLICÁVEL — GUIA DE PESQUISA\\n\\n1. Registre a data e a origem do relato.\\n2. Separe observação direta de informação ouvida de terceiros.\\n3. Guarde cópias sem alterar os originais.\\n4. Evite publicar nomes, endereços ou dados pessoais.\\n5. Procure explicações comuns antes de concluir que algo é inexplicável.\\n"},
 {name:"catalogo_de_lendas.txt",desc:"Notas iniciais sobre lendas urbanas recorrentes.",content:"CATÁLOGO DE LENDAS — NOTAS\\n\\n• A estrada muda: relatos sobre rádios que perdem sinal.\\n• O nome na lista: histórias sobre registros impossíveis.\\n• A janela acesa: prédios vazios com sinais de ocupação.\\n\\nNotas ainda não verificadas. Consultar fontes locais antes de reproduzir como fato.\\n"},
 {name:"nota_04-B.txt",desc:"Nota administrativa com referência a um tópico pouco comentado.",content:"REGISTRO 04-B\\n\\nNão confundir repetição com coincidência.\\nTrês relatos independentes mencionam o mesmo detalhe: uma porta que não aparece nas fotografias.\\n\\nEstado: inconclusivo.\\nPróxima ação: rever a origem das imagens e procurar uma explicação comum.\\n"}
];
const $ = s => document.querySelector(s);
const postList = $("#postList"), topicIndex = $("#topicIndex");
let currentView = "home";
let nickname = localStorage.getItem("ai_nickname") || "visitante_anonimo";
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function getComments(p){try{return JSON.parse(localStorage.getItem("ai_comments_"+p.id)) ?? p.comments;}catch{return p.comments;}}
function renderPosts(target, items){
 target.innerHTML = items.map(p=>`<article class="post-card"><div class="post-icon">${p.icon}</div><div><h3><button data-open="${p.id}">${escapeHTML(p.title)}</button></h3><div class="meta">por <a href="#" data-member="${escapeHTML(p.author)}">${escapeHTML(p.author)}</a> • ${p.date} • ${escapeHTML(p.category)}</div><p class="excerpt">${escapeHTML(p.excerpt)}</p><div class="tags">${p.tags.map(t=>`<span class="tag">${escapeHTML(t)}</span>`).join("")}<span class="post-stats">${p.views} visitas • ${getComments(p).length} resposta(s)</span></div></div></article>`).join("");
}
function filteredPosts(){
 const q=$("#searchInput").value.toLowerCase().trim(), cat=$("#categoryFilter").value;
 return posts.filter(p=>(cat==="Todas"||p.category===cat)&&(q===""||[p.title,p.excerpt,p.author,p.body,p.id,...p.tags].join(" ").toLowerCase().includes(q)));
}
function refreshHome(){const items=filteredPosts();renderPosts(postList,items);$("#postCount").textContent=items.length+" tópicos";$("#sidePostCount").textContent=posts.length;renderPosts(topicIndex,posts);}
function showView(name){
 currentView=name;
 document.querySelectorAll(".view").forEach(v=>v.classList.add("hidden"));
 const target=$("#view-"+name);if(target)target.classList.remove("hidden");
 document.querySelectorAll(".nav-link").forEach(b=>b.classList.toggle("active",b.dataset.view===name));
 if(name==="members")renderMembers();if(name==="archive")renderFiles();
}
function openPost(id){
 const p=posts.find(x=>x.id===id);if(!p)return;
 const comments=getComments(p);
 $("#dialogTitle").textContent="Tópico :: "+p.id;
 $("#dialogBody").innerHTML=`<div class="post-detail"><div class="meta">${escapeHTML(p.category)} • publicado por <a href="#" data-member="${escapeHTML(p.author)}">${escapeHTML(p.author)}</a> • ${p.date}</div><h2>${escapeHTML(p.title)}</h2><div class="body-text">${escapeHTML(p.body)}</div><div class="tags">${p.tags.map(t=>`<span class="tag">${escapeHTML(t)}</span>`).join("")}</div><h3>Respostas (${comments.length})</h3><div id="commentsArea">${comments.map(c=>`<div class="comment"><strong>${escapeHTML(c.author)}</strong><p>${escapeHTML(c.text)}</p></div>`).join("")||'<p class="muted">Ainda não há respostas. Seja a primeira pessoa a comentar.</p>'}</div><div class="comment-form"><strong>Responder ao tópico</strong><label class="tiny" for="commentText">Sua mensagem</label><textarea id="commentText" placeholder="Escreva uma resposta respeitosa..."></textarea><button class="button primary" id="sendComment" data-post="${p.id}">Publicar resposta</button><p class="tiny muted">Protótipo local: as respostas ficam salvas apenas neste navegador.</p></div></div>`;
 $("#postDialog").showModal();
}
function renderMembers(){
 $("#memberList").innerHTML=members.map(m=>`<div class="member"><div class="avatar">${m.avatar}</div><div><h3><a href="#" data-member="${m.name}">${m.name}</a></h3><p><strong>${m.role}</strong><br>${m.bio}</p></div></div>`).join("");
}
function renderFiles(){
 $("#fileList").innerHTML=docs.map((d,i)=>`<div class="file-item"><div class="file-icon">▤</div><div><strong>${d.name}</strong><p>${d.desc}</p></div><button class="button" data-download="${i}">Abrir / salvar</button></div>`).join("");
}
function showMember(name){
 const m=members.find(x=>x.name===name);
 $("#dialogTitle").textContent="Perfil de membro";
 $("#dialogBody").innerHTML=m?`<div class="member"><div class="avatar">${m.avatar}</div><div><h3>${escapeHTML(m.name)}</h3><p><strong>${escapeHTML(m.role)}</strong></p><p>${escapeHTML(m.bio)}</p><p class="muted tiny">Perfil fictício • membro da comunidade</p></div></div><h3>Últimas contribuições</h3>${posts.filter(p=>p.author===m.name).map(p=>`<p><a href="#" data-open="${p.id}">${escapeHTML(p.title)}</a></p>`).join("")||"<p class='muted'>Nenhuma publicação encontrada.</p>"}`:`<p>Perfil não encontrado.</p>`;
 $("#postDialog").showModal();
}
function downloadDoc(i){
 const d=docs[i];if(!d)return;
 const blob=new Blob([d.content],{type:"text/plain;charset=utf-8"}),url=URL.createObjectURL(blob);
 const a=document.createElement("a");a.href=url;a.download=d.name;document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
}
function openNewTopic(){
 $("#dialogTitle").textContent="Enviar um relato";
 $("#dialogBody").innerHTML=`<form id="newTopicForm" class="comment-form"><label for="newTitle">Título</label><input id="newTitle" required maxlength="100" placeholder="O que aconteceu?"><label for="newCategory">Categoria</label><select id="newCategory"><option>Relatos</option><option>Lendas urbanas</option><option>Pesquisa</option><option>Locais</option></select><label for="newBody">Relato</label><textarea id="newBody" required maxlength="2000" placeholder="Conte o que você observou. Separe fatos de suposições."></textarea><button class="button primary" type="submit">Publicar tópico</button><p class="tiny muted">Esta versão salva o tópico apenas na sessão atual; comentários são guardados neste navegador. Não envie dados pessoais.</p></form>`;
 $("#postDialog").showModal();
}
document.addEventListener("click",e=>{
 const view=e.target.closest("[data-view]");if(view){e.preventDefault();showView(view.dataset.view);return;}
 const op=e.target.closest("[data-open]");if(op){e.preventDefault();openPost(op.dataset.open);return;}
 const mem=e.target.closest("[data-member]");if(mem){e.preventDefault();showMember(mem.dataset.member);return;}
 const dl=e.target.closest("[data-download]");if(dl){downloadDoc(Number(dl.dataset.download));return;}
 if(e.target.id==="sendComment"){
   const id=e.target.dataset.post, p=posts.find(x=>x.id===id), text=$("#commentText").value.trim();
   if(!text){$("#commentText").focus();return;}
   const arr=getComments(p);arr.push({author:nickname,text});
   localStorage.setItem("ai_comments_"+id,JSON.stringify(arr));openPost(id);refreshHome();
 }
});
$("#searchInput").addEventListener("input",refreshHome);
$("#categoryFilter").addEventListener("change",refreshHome);
$("#browseBtn").addEventListener("click",()=>{showView("topics");document.querySelector(".section-heading").scrollIntoView({behavior:"smooth",block:"start"});});
$("#newTopicBtn").addEventListener("click",openNewTopic);
$("#saveNick").addEventListener("click",()=>{const val=$("#nickname").value.trim().replace(/[<>]/g,"").slice(0,24);if(!val){$("#nickStatus").textContent="Digite um apelido primeiro.";return;}nickname=val;localStorage.setItem("ai_nickname",nickname);$("#nickStatus").textContent="Navegando como "+nickname+".";});
$("#nickname").value=nickname;$("#nickStatus").textContent="Navegando como "+nickname+".";
$("#secretBtn").addEventListener("click",()=>$("#secretContent").classList.toggle("hidden"));
$("#randomPostLink").addEventListener("click",e=>{e.preventDefault();const p=posts[Math.floor(Math.random()*posts.length)];openPost(p.id);});
$("#newTopicForm");
document.addEventListener("submit",e=>{
 if(e.target.id!=="newTopicForm")return;
 e.preventDefault();
 const title=$("#newTitle").value.trim(),body=$("#newBody").value.trim(),category=$("#newCategory").value;
 if(!title||!body)return;
 const id="local_"+Date.now().toString(36);
 posts.unshift({id,title,category,author:nickname,date:new Date().toLocaleDateString("pt-BR"),views:0,replies:0,icon:"✎",tags:["novo relato"],excerpt:body.slice(0,145)+(body.length>145?"…":""),body,comments:[]});
 $("#postDialog").close();$("#searchInput").value="";$("#categoryFilter").value="Todas";refreshHome();showView("home");
});
refreshHome();renderMembers();renderFiles();
