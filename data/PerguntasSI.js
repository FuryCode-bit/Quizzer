const SI = [
      {
        question: "Q1 - lei portuguesa sobre o cibercrime começa por definir, no artigo 2, uma série de termos  usados na legislação. Quais dos seguintes termos são definidos no referido artigo?",
        options: [
          "Dados de tráfego, Fornecedor de serviços, Sistema Informático",
          "Interseção",
        ],
        correct_option: "Dados de tráfego, Fornecedor de serviços, Sistema Informático"
      },
      {
        question: "Q2 - Qual é a pena máxima que a Lei portuguesa preve para cibercrimes?",
        options: [
          "Coisa pouca: 1 ano",
          "2 anitos",
          "5 anos",
          "10 anos"
        ],
        correct_option: "10 anos"
      },
      {
        question: "Q3 - Qual das seguintes palavras/designações pode ser encontrada na Lei Portuguesa sobre o cibercrime?",
        options: [
          "Twitter",
          "Facebook",
          "Google Plus",
          "Hi5",
          "Nenhuma das anteriores"
        ],
        correct_option: "Nenhuma das anteriores"
      },
      {
        question: "Q4 - Qual o principio que defende que para provar a segurança de um sistema criptográfico é necessário considerar que tudo acerca desse sistema é do conhecimento público, exceto a chave?",
        options: [
          "Principio de Mermanov",
          "Principio de Shamir",
          "Principio de Kerckoffs"
        ],
        correct_option: "Principio de Kerckoffs"
      },
      {
        question: "Q5 - Qual dos métodos básicos, descritos por shannon no artigo Communication Theory of Secrecy Systems, consiste em obscurecer a relação entre o texto limpo, o criptograma e a chave?",
        options: [
          "Confusão",
          "Difusão",
          "Revolução",
          "Açafrão"
        ],
        correct_option: "Confusão"
      },
      {
        question: "Q6 - Em qual das cifras seguintes é que a chave tem sempre o tamanho do alfabeto usado?",
        options: [
          "Cifra de Vigenére",
          "Cifra de César",
          "Cifra de Substituição",
          "Enigma"
                ],
        correct_option: "Cifra de Vigenére"
      },
      {
        question: "Q7 - Que tipo de cifra preferia utilizar numa comunicação em que precisa de ir cifrando dados à medida que são gerados (Serviço de Streaming)?",
        options: [
          "Cifra de chave simétrica continua",
          "Cifra de chave simétrica por blocos",
          "Cifra de chave pública",
          "Cifra de voz"
                ],
        correct_option: "Cifra de chave simétrica por blocos"
      },
      {
        question: "A construção seguinte é muito usada no desenho de cifras de chave simétrica.\n\nQue nome se dá a essa construção?",
        options: [
          "Redes de Feistel"
                ],
        correct_option: "Redes de Feistel"
      },
      {
        question: "Q8 - A função representada pelas Redes de Feistel é invertivel? I.e, sabendo R1 e L1 consegue chegar-sea R0 e L0?",
        options: [
          "Não, não é invertível",
          "Sim, consegue-se sempre",
          "Só é invertível se todas as funções f1, f2, f3 ... fd forem invertíveis"
                ],
        correct_option: "Não, não é invertível"
      },
      {
        question: "Q9 - Quais dos seguintes modos de cifra não necessitam de preenchimento?",
        options: [
          "ECB",
          "CBC",
          "CTR-Determinístico, CTR-Aleatório"
                ],
        correct_option: "CTR-Determinístico, CTR-Aleatório"
      },
      {
        question: "Q10 - Qual dos seguintes modos de cifra permite cifrar diretamente qualquer bloco de um texto cifrado? (Sem necessitar de cifrar outros blocos anteriores)?",
        options: [
          "ECB",
          "CBC",
          "CTR-Determinístico",
          "CTR-Aleatório"
                ],
        correct_option: "ECB"
      },
      {
        question: "Q11 - O que significa o R do acrônimo CTR?",
        options: [
          "Random",
          "Real",
          "Read",
          "Rolling"
                ],
        correct_option: "Random"
      },
      {
        question: "Q12 - Considere que estava a testar uma função de hash criptográfica com qualidade reconhecida, cujo output tinha um comprimento de apenas 5 bits. De acordo com a propriedade da resistência à descoberta de texto limpo original, quantos inputs diferentes teria de testar, em média, para obter um com um valor de hash igual a 1111?",
        options: [
          "Nenhum, a tarefa é impossível",
          "5 inputs",
          "2^4 inputs",
          "2^5 inputs"
                ],
        correct_option: "2^5 inputs"
      },
      {
        question: "Q13 - Um utilizador calculou o hash SHA1 de um ficheiro, tendo obtido o valor: 01110110100101010110110...0011\n\nDepois o utilizador alterou o primeiro bit do ficheiro, de 0 para 1. Qual lhe parece que é o valor mais provável para o hash do ficheiro modificado?",
        options: [
          "01110110100101010110110...0011",
          "10001001011010101001001...1100",
          "11101111001111001111101...1001",
          "11110110100101010110110...0011"
                ],
        correct_option: "11101111001111001111101...1001"
      },
      {
        question: "Q14 - No contexto da unidade curricular de segurança informática deste ano, foram estudadas duas construções para MACs. Nas opções seguintes, selecione as duas que contêm a sua designação?",
        options: [
          "HMAC, ECBC-MAC",
          "MAC-RSA",
          "SHA512-MAC",
          "ELGamal-MAC",
                ],
        correct_option: "HMAC, ECBC-MAC"
      },
      {
        question: "Q15 - No contexto de uma comunicação, quais são os objetivos de uma MAC?",
        options: [
          "Garantir que os dados abrangidos pelo MAC não são vistos por ninguém além das entidades legítimas",
          "Garantir que os dados abrangidos pelo MAC não são alterados propositadamente por alguém em trânsito nem que ocorrem erros",
          "Garantir que qualquer entidade maliciosa que observa o canal não sabe a origem da mensagem",
                ],
        correct_option: "Garantir que os dados abrangidos pelo MAC não são alterados propositadamente por alguém em trânsito nem que ocorrem erros"
      },
      {
        question: "Q16 - Considere que a Alice cifra 8 puzzles de Merkle com chave de 4 bits, enviando-os de seguida ao Bob. De acordo com o protocolo inerente a esta forma de trocar chaves, quantos puzzles tem o Bob de decifrar antes de enviar a resposta à Alice?",
        options: [
          "0 Puzzles",
          "1 Puzzles",
          "2 Puzzles",
          "8 Puzzles",
          "16 Puzzles"
                ],
        correct_option: "8 Puzzles"
      },
      {
        question: "Q17 - Considere que se pretendia instalar 6 equipamentos em rede e que todos precisam do comunicar individualmente com os outros, de forma segura. Quantas chaves diferentes é preciso pré-distribuir sem que haja nomeação de um agente de confiança?",
        options: [
          "1",
          "6π^2",
          "5",
          "6",
          "12",
          "6C2 = 15"
                ],
        correct_option: "6C2 = 15"
      },
      {
        question: "Q18 - Em que problema reconhecidamente difícil é que se baseia a segurança do protocolo de acordo de chaves Diffie Hellman?",
        options: [
          "Problema de fatorização de números primos",
          "Problema da complexidade de O(n^2)",
          "Problema do logaritmo discreto",
          "Problema da exponenciação módulo um primo"
                ],
        correct_option: "Problema do logaritmo discreto"
      },
      {
        question: "Q19 - Das opções seguintes selecione aquelas que se referem a valores considerados públicos no âmbito do protocolo Diffie Hellman",
        options: [
          "O valor gerado aleatoriamente pela Alice entre 0 a P-1",
          "Um primo P com mais de 512 bits, Um número entre 2 e P-1, cujas potências módulo P dão origem a todos os números entre 0 e P-1, conhecido como raiz primitiva ou um gerador do grupo Z",
          "O valor resultante do módulo g^^x mod P"
                ],
        correct_option: "Um primo P com mais de 512 bits, Um número entre 2 e P-1, cujas potências módulo P dão origem a todos os números entre 0 e P-1, conhecido como raiz primitiva ou um gerador do grupo Z"
      },
      {
        question: "Q20 - Qual a parte da ferramenta OpenSSL que pode ser usada para cifrar e decifrar ficheiros pequenos com RSA?",
        options: [
          "rsa",
          "enc",
          "tsa",
          "rsautl"
                ],
        correct_option: "rsautl"
      },
      {
        question: "Que nome se dá ao procedimento esquematizado na figura seguinte, e que é normalmente utilizado no âmbito da cifra e decifra RSA?",
        options: [
          "Hash Based Message Padding",
          "Cypher Block Chaining Padding",
          "Optimal Asymmetric Encryption Padding",
          "PKCS Padding"
        ],
        correct_option: "Optimal Asymmetric Encryption Padding"
      },
        {
          question: "Qual é a primeira operação que se efetua aquando da descodificação de uma mensagem tratada com o procedimento OAEP?",
          options: [
            "Calcular o valor de hash de X através de H1, i.e, H1(X)",
            "Calcular o valor de hash de X através de H2, i.e, H2(X)",
            "Calcular o valor de r a partir de Y",
            "Calcular o valor de hash de m através de H1, i.e, h1(m)"
          ],
          correct_option: "Calcular o valor de hash de X através de H2, i.e, H2(X)"
        },
        {
          question: "Qual é o principal objetivo do procedimento OAEP?",
          options: [
            "O objetivo é aumentar a segurança da cifra",
            "O objetivo é evitar que a cifra de textos limpos iguais deem origem a criptogramas iguais, se cifrados com a mesma chave",
            "O objetivo é evitar que hajam erros na comunicação do criptograma através da adição de códigos de integridade",
            "O objetivo é tornar a decifra impossível, mesmo com a chave privada correta!"
          ],
          correct_option: "O objetivo é aumentar a segurança da cifra"
        },
        {
          question: "A Alice e o Bob estão a comunicar através da internet e ambos trocaram as suas chaves públicas RSA na última vez que se encontraram num café. A Alice envia todas as mensagens cifradas e assinadas digitalmente ao Bob. Quando o Bob recebe uma mensagem com uma assinatura, que chave deve utilizar para validar essa assinatura?",
          options: [
            "A sua chave privada",
            "A sua chave pública",
            "A chave privada da Alice",
            "A chave pública da Alice"
          ],
          correct_option: "A chave pública da Alice"
        },
        {
          question: "Qual o esquema mais conhecido e considerado seguro, de implementação da assinatura digital de um documento eletrónico?",
          options: [
            "Cifrar o documento com RSA",
            "Cifrar o documento com AES e depois RSA",
            "Cifrar o documento com RSA e depois AES",
            "Calcular o hash do documento e cifrar o resultado com RSA",
            "Cifrar o resultado com RSA e calcular o hash do documento"
          ],
          correct_option: "Calcular o hash do documento e cifrar o resultado com RSA"
        },
        {
          question: "Qual das seguintes está correta?",
          options: [
            "A ativação do TLS no Apache requer, necessariamente certificados digitais gerados pelo próprio Apache",
            "A ativação TLS no Apache aceita certificados digitais gerados pelo OpenSSL",
            "A ativação do TLS no Apache requer, necessariamente, certificados digitais gerados por uma empresa devidamente credenciada",
            "Não é possível ativar o TLS no Apache"
          ],
          correct_option: "A ativação TLS no Apache aceita certificados digitais gerados pelo OpenSSL"
        },
        {
          question: "Das seguintes, selecione aquelas que correspondem a características de um certificado digital autoassinado?",
          options: [
            "O prazo de validade de tal certificado é indefinido",
            "Os campos subject e issuer contêm o mesmo nome e A assinatura do certificado pode ser verificada com a chave também contida no certificado",
            "O certificado é sempre válido",
            "O certificado foi passado por uma entidade de confiança",
          ],
          correct_option: "Os campos subject e issuer contêm o mesmo nome e A assinatura do certificado pode ser verificada com a chave também contida no certificado"
        },
        {
          question: "Qual é o objetivo principal do salt no armazenamento de palavra-passe em bases de dados?",
          options: [
            "O uso do salt torna o vazamento de base de dados através de Code Injection mais difícil",
            "O salt torna a palavra-passe mais forte, prevenindo a sua adivinhação",
            "O salt aumenta a resistência a ataques de pré-processamento de valores de hash",
            "O salt serve para temperar a salada"
          ],
          correct_option: "O salt aumenta a resistência a ataques de pré-processamento de valores de hash"
        },
        {
          question: "Que nome se dá ao conjunto de hardware, software, políticas, pessoas e procedimentos necessários à criação, gestão, distribuição, utilização, armazenamento e revogação de certificados digitais usados na internet nos dias de hoje?",
          options: [
            "Rede de Confiança (Web of trust)",
            "Infraestrutura de chave pública (Public Key Infrastructure)",
            "Hierarquia de confiança (Trust Hierarchy)",
            "Caminho de certificação (Certification Path)"
          ],
          correct_option: "Infraestrutura de chave pública (Public Key Infrastructure)"
        },
        {
          question: "Um programa prepara-se para validar uma assinatura digital. Recebeu no âmbito dessa operação o documento assinado, 3 certificados digitais e uma lista de revogação de certificados. Quantas assinaturas tem o programa de certificar antes de considerar a assinatura válida ou inválida?",
          options: [
            "1 assinatura",
            "2 assinaturas",
            "3 assinaturas",
            "4 assinaturas",
          ],
          correct_option: "2 assinaturas"
        },
        {
          question: "Um utilizador prepara-se para assinar dois documentos em formato PDF. Quantas vezes terá de inserir o PIN?",
          options: [
            "1 vez",
            "2 vezes",
            "3 vezes",
            "0 vezes"
          ],
          correct_option: "2 vezes"
        },
        {
          question: "Dos números representados a seguir, qual deles se pode referir ao código de cancelamento do smartcard de um cartão de cidadão?",
          options: [
            "758",
            "6548",
            "46548",
            "332256",
            "5454545",
            "12345678"
          ],
          correct_option: "12345678"
        },
        {
          question: "Para que servem os pares de chaves RSA contidos no cartão de cidadão? (Assinale todas que achar corretas)",
          options: [
            "Cifra de documentos, Autenticação do cidadão, Assinatura digital de documentos",
            "Cálculo do MAC de documentos eletrónicos",
          ],
          correct_option: "Cifra de documentos, Autenticação do cidadão, Assinatura digital de documentos"
        },
        {
          question: "Considere analisar o comando GPG seguinte:\n> gpg --armor -se msg.txt\nQual é o objetivo da opção --armor?",
          options: [
            "É a opção que instrui o gpg para cifrar",
            "É a opção que instrui o gpg para assinar digitalmente",
            "É a opção que instrui a codificação da mensagem em Base64",
            "É a opção que instrui o gpg para também comprimir a mensagem"
          ],
          correct_option: "É a opção que instrui a codificação da mensagem em Base64"
        },
        {
          question: "De acordo com um porta-chaves do utilizador GPG, A política de confiança que o utilizador está a usar é a que vem definida por defeito numa instalação normal GPG. De acordo com algumas chaves, qual ou quais é que terão validade total no sistema?",
          options: [
            "Todas as que são full"
          ],
          correct_option: "Todas as que são full"
        },
        {
          question: "Durante a utilização do GPG para verificar a assinatura de uma mensagem que recebeu, o Luke verificou que o sistema devolvia um erro de confiança para o remetente da mensagem, que ele até conhecia bem e que lhe havia passado a chave num café. Dos comandos seguintes, qual deveria ser emitido para resolver este problema?",
          options: [
            "> gpg --gen-keys nome-remetente",
            "> gpg --import nome-remetente",
            "> gpg --sign-key nome-remetente",
            "> sudo make-breakfast"
          ],
          correct_option: "> gpg --import nome-remetente"
        },
        {
          question: "Determinado atacante está ligado a uma rede local e colocou a sua placa de rede em modo promíscuo. Cada vez que uma trama Address Resolution Protocol (ARP) chega à sua máquina, este responde com uma mensagem fraudulenta, indicando na resposta o seu próprio endereço. Qual é a designação deste ataque?",
          options: [
            "SYN Flood",
            "Envenenamento de cache DNS (DNS Spoofing)",
            "Envenenamento de cache MAC (MAC Spoofing)",
            "Distributed Denial of Service"
          ],
          correct_option: "Envenenamento de cache MAC (MAC Spoofing)"
        },
        {
          question: "A Claire prepara-se para iniciar um ataque LAND no servidor. Quais os endereços IP fonte e destino dos pacotes emitidos pelo computador da Claire?",
          options: [
            "(endereço do servidor alvo)"
          ],
          correct_option: "(endereço do servidor alvo)"
        },
        {
          question: "Se a Claire quisesse fazer um ataque Smurf à Alice, qual era o endereço que ia no campo IP fonte dos pacotes que saem do computador?",
          options: [
            "(endereço do alvo)"
          ],
          correct_option: "(endereço do alvo)"
        },
        {
          question: "Qual dos seguintes ataques clássicos é baseado na fragmentação errada de pacotes IP?",
          options: [
            "Fragle",
            "Echo Chargen",
            "Tear Drop"
          ],
          correct_option: "Tear Drop"
        },
        {
        question: "Qual dos seguintes problemas representa um potencial problema de realização?",
        options: [
        "O admin configurou a palavra passe qwerty em todos os pcs do lab",
        "A implementação da pilha protocolar IP de um sistema operativo assume (sem verificar) que todos os pacotes que revebe têm endereços IP fonte e destino diferentes",
        "A implementação de um servidor de mensagens curtas tem uma função que guarda texto num buffer usando ponteiros, assumindo que as mensagens são menores que 160 caracteres, sem nunca fazer verificação do tamanho"
        ],
          correct_option: "A implementação de um servidor de mensagens curtas tem uma função que guarda texto num buffer usando ponteiros, assumindo que as mensagens são menores que 160 caracteres, sem nunca fazer verificação do tamanho"
        },
        {
        question: "Os IDSs podem ser classificados de acordo com várias caracteristicas operacionais/vertentes. Quais das seguintes concretizam essas caracteristicas?",
        options: [
        "Pela fonte de eventos, método de detecção, recursos que utilizam e forma como reagem",
        "Pelo celeridade com, que atuam",
        "Pelo método de detecção que utilizam",
        ],
          correct_option: "Pela fonte de eventos, método de detecção, recursos que utilizam e forma como reagem"
        },
        {
        question: "A aula teórica menciona dois desses IDSs. Qual dos dois faz uso de funções de hach para encontrar uma intrusão (alteração de ficheiros de sistema) num sistema operativo?",
        options: [
        "Nessus",
        "OpenVAS",
        "Tripwire",
        "Snort"
        ],
          correct_option: "Tripwire"
        },
        {
        question: "Que tipo de Firewall implementam as funcionalidades fornecidas pelo núcleo Linux e que podem ser configuradas com o iptables?",
        options: [
        "Filtros de pacote estáticos",
        "Filtros de pacote dinamicos",
        "Filtro de circuitos",
        "Filtro aplicacional",
        "Filtro de oleo"
        ],
          correct_option: "Filtros de pacote estáticos"
        },
        {
        question: "Numa máquina gateway foi instalada uam distribuição linux chamada IPCop, especialmente vocacionada para firewalls. Considere que chegou um pacote, vindo de fora da rede protegida pela firewall, direcionado para um computador interno dessa rede. Em qual das seguintes cadeiras vai passar esse pacote?",
        options: [
        "INPUT",
        "PREROUTING",
        "POSTROUTING",
        "OUTPUT",
        "FORWARD"
        ],
          correct_option: "FORWARD"
        },
        {
        question: "Um utilizador está a tentar construir um comando iptables para adição de uma regra na firewall do SO IPCop referido antes. A sua intenção é introduzir uma regra no final da cadeia INPUT. Faltam-lhe apenas duas opções no comando:\n\n> iptables AQUI1 INPUT -p tcp --dport 80 AQUI2 ACCEPT\n\nO que falta?",
        options: [
        "iptables -A INPUT -p tcp --dport 80 -j ACCEPT"
        ],
          correct_option: "iptables -A INPUT -p tcp --dport 80 -j ACCEPT"
        },
        {
        question: "O que é um AntiVirus?",
        options: [
        "Um IDS",
        "Uma Firewall",
        "Nenhuma das anteriores"
        ],
        correct_option: "Nenhuma das anteriores"
      },
      {
        question: "Qual é a definição de texto limpo?",
        options: [
        "Informação obscurecida",
        "Mensagem original em criptograma",
        "Informação a ser enviada",
        "Algoritmo de cifra"
        ],
        correct_option: "Informação a ser enviada"
        },
        {
        question: "O que é um sistema criptográfico?",
        options: [
        "Conjunto de algoritmos eficientes",
        "Conjunto de políticas de segurança",
        "Especificação das operações de inicialização",
        "Modelo de ataque"
        ],
        correct_option: "Especificação das operações de inicialização"
        },
        {
        question: "Qual é a definição de firewall?",
        options: [
        "Sistema de deteção de intrusões",
        "Sistema de deteção e prevenção de intrusões",
        "Software de proteção contra ataques",
        "Sistema de controle de acesso a recursos de rede"
        ],
        correct_option: "Sistema de controle de acesso a recursos de rede"
        },
        {
        question: "O que é um hacker?",
        options: [
        "Indivíduo habilidoso na arte de atacar sistemas computacionais",
        "Especialista em testes de segurança",
        "Indivíduo que efetua atos ilícitos por brincadeira",
        "Entidade que personifica quem pretende comprometer a técnica criptográfica"
        ],
        correct_option: "Indivíduo habilidoso na arte de atacar sistemas computacionais"
        },
        {
        question: "Qual é a função de um sistema de deteção de intrusões (IDS)?",
        options: [
        "Monitorizar atividades maliciosas",
        "Identificar problemas nas políticas de segurança",
        "Prevenir ataques em tempo real",
        "Detetar e documentar ameaças atuais"
        ],
        correct_option: "Monitorizar atividades maliciosas"
        },
        {
        question: "O que é uma vulnerabilidade?",
        options: [
        "Pacote de software que explora uma falha de segurança",
        "Característica que torna um sistema vulnerável a ataques",
        "Dano resultante da execução bem-sucedida de um ataque",
        "Conjunto de políticas e mecanismos de segurança"
        ],
        correct_option: "Característica que torna um sistema vulnerável a ataques"
        },
        {
        question: "O que é um vírus de computador?",
        options: [
        "Programa que se replica e dissemina sozinho",
        "Software que explora vulnerabilidades em sistemas interligados",
        "Malware que fornece acesso não autorizado a sistemas infetados",
        "Programa que se pode replicar de computador para computador com intervenção humana"
        ],
        correct_option: "Programa que se pode replicar de computador para computador com intervenção humana"
        },
        {
        question: "O que é a criptografia?",
        options: [
        "Conjunto de técnicas para comunicação secreta",
        "Estudo de técnicas para quebrar a segurança da comunicação",
        "Conjunto de algoritmos para cifrar e decifrar mensagens",
        "Sistema que protege e controla o acesso aos recursos de uma rede"
        ],
        correct_option: "Conjunto de técnicas para comunicação secreta"
        },
        {
        question: "O que é a criptanálise?",
        options: [
        "Estudo de técnicas para quebrar a segurança da comunicação",
        "Técnica de decifrar mensagens cifradas",
        "Conjunto de algoritmos para cifrar e decifrar mensagens",
        "Sistema que monitoriza atividades maliciosas"
        ],
        correct_option: "Estudo de técnicas para quebrar a segurança da comunicação"
        },
        {
        question: "O que é uma cifra de chave simétrica?",
        options: [
        "Par de algoritmos para cifrar e decifrar mensagens",
        "Técnica de decifrar mensagens cifradas",
        "Conjunto de políticas de segurança em redes",
        "Sistema de proteção contra ataques em sistemas distribuídos"
        ],
        correct_option: "Par de algoritmos para cifrar e decifrar mensagens"
        },
        {
        question: "O que é uma cifra de chave pública?",
        options: [
        "Par de algoritmos para cifrar e decifrar mensagens",
        "Técnica de decifrar mensagens cifradas",
        "Conjunto de políticas de segurança em redes",
        "Sistema de proteção contra ataques em sistemas distribuídos"
        ],
        correct_option: "Par de algoritmos para cifrar e decifrar mensagens"
        },
        {
        question: "O que é um Ciphertext-only Attack (COA)?",
        options: [
        "Ataque em que apenas o criptograma é conhecido",
        "Ataque em que se conhece o texto-limpo original",
        "Ataque em que se escolhe o texto-limpo original",
        "Ataque em que se decifram criptogramas relacionados"
        ],
        correct_option: "Ataque em que apenas o criptograma é conhecido"
        },
        {
        question: "O que é um Known Plaintext Attack (KPA)?",
        options: [
        "Ataque em que apenas o criptograma é conhecido",
        "Ataque em que se conhece o texto-limpo original",
        "Ataque em que se escolhe o texto-limpo original",
        "Ataque em que se decifram criptogramas relacionados"
        ],
        correct_option: "Ataque em que se conhece o texto-limpo original"
        },
        {
        question: "O que é um Chosen-plaintext Attack (CPA)?",
        options: [
        "Ataque em que apenas o criptograma é conhecido",
        "Ataque em que se conhece o texto-limpo original",
        "Ataque em que se escolhe o texto-limpo original",
        "Ataque em que se decifram criptogramas relacionados"
        ],
        correct_option: "Ataque em que se escolhe o texto-limpo original"
        },
        {
        question: "O que é um Adaptative-chosen-plaintext Attack (CPA2)?",
        options: [
        "Ataque em que apenas o criptograma é conhecido",
        "Ataque em que se conhece o texto-limpo original",
        "Ataque em que se escolhe o texto-limpo original",
        "Ataque em que se decifram criptogramas relacionados"
        ],
        correct_option: "Ataque em que se decifram criptogramas relacionados"
        },
        {
        question: "O que é um Chosen-ciphertext Attack (CCA1)?",
        options: [
        "Ataque em que apenas o criptograma é conhecido",
        "Ataque em que se conhece o texto-limpo original",
        "Ataque em que se escolhem os criptogramas",
        "Ataque em que se decifram criptogramas relacionados"
        ],
        correct_option: "Ataque em que se escolhem os criptogramas"
        },
        {
        question: "O que é um Adaptative chosen-ciphertext attack (CCA2)?",
        options: [
        "Ataque em que apenas o criptograma é conhecido",
        "Ataque em que se conhece o texto-limpo original",
        "Ataque em que se escolhem os criptogramas",
        "Ataque em que se decifram criptogramas relacionados"
        ],
        correct_option: "Ataque em que se decifram criptogramas relacionados"
        },
        {
        question: "Qual das seguintes não é uma propriedade de segurança da criptografia?",
        options: [
        "Confidencialidade",
        "Autenticidade",
        "Anonimato",
        "Integridade"
        ],
        correct_option: "Anonimato"
        },
        {
        question: "O que é um worm?",
        options: [
        "Programa que se replica e dissemina sozinho",
        "Software que explora vulnerabilidades em sistemas interligados",
        "Malware que fornece acesso não autorizado a sistemas infetados",
        "Programa que se pode replicar de computador para computador com intervenção humana"
        ],
        correct_option: "Programa que se replica e dissemina sozinho"
        },
        {
        question: "O que é um Cavalo de Tróia?",
        options: [
        "Programa que se replica e dissemina sozinho",
        "Software que explora vulnerabilidades em sistemas interligados",
        "Malware que fornece acesso não autorizado a sistemas infetados",
        "Malware que se apresenta como ficheiro ou programa legítimo"
        ],
        correct_option: "Malware que se apresenta como ficheiro ou programa legítimo"
        },
        {
          question: "Qual é o objetivo do ataque de força bruta?",
          options: [
            "Encontrar a chave de cifra de um criptograma",
            "Encontrar o texto-limpo correspondente a um criptograma",
            "Encontrar o algoritmo de cifra mais eficiente",
            "Encontrar o espaço de mensagens de uma cifra"
          ],
          correct_option: "Encontrar o texto-limpo correspondente a um criptograma"
        },
        {
          question: "O que é o Princípio de Kerckhoffs?",
          options: [
            "Um sistema criptográfico deve ser seguro mesmo que a chave seja pública.",
            "Um sistema criptográfico deve ser seguro mesmo que a chave seja desconhecida.",
            "Um sistema criptográfico deve ser seguro mesmo que tudo seja público, exceto a chave.",
            "Um sistema criptográfico deve ser seguro mesmo que tudo seja desconhecido, exceto a chave."
          ],
          correct_option: "Um sistema criptográfico deve ser seguro mesmo que tudo seja público, exceto a chave."
        },
        {
          question: "Qual é a função da confusão na teoria da informação?",
          options: [
            "Espalhar as redundâncias do texto-limpo por todo o criptograma.",
            "Obscurecer a relação entre o texto-limpo, o criptograma e a chave.",
            "Garantir que a probabilidade de obter o mesmo criptograma é igual para todas as mensagens.",
            "Criar chaves pseudo-aleatórias para cifras de chave simétrica."
          ],
          correct_option: "Obscurecer a relação entre o texto-limpo, o criptograma e a chave."
        },
        {
          question: "O que é um secretismo perfeito?",
          options: [
            "A probabilidade de obter o mesmo criptograma para duas mensagens é igual.",
            "A probabilidade de obter o mesmo criptograma para duas mensagens é sempre zero.",
            "A probabilidade de obter o mesmo criptograma para duas mensagens é quase zero.",
            "A probabilidade de obter o mesmo criptograma para duas mensagens é sempre um."
          ],
          correct_option: "A probabilidade de obter o mesmo criptograma para duas mensagens é igual."
        },
        {
          question: "O que é uma cifra de chave simétrica contínua?",
          options: [
            "Substituição da chave aleatória por uma chave pseudo-aleatória gerada a partir de uma semente.",
            "Uso de uma única chave para cifrar e decifrar mensagens.",
            "Utilização de chaves diferentes para cifrar diferentes partes de uma mensagem.",
            "Utilização de uma chave pública e uma chave privada para cifrar e decifrar mensagens."
          ],
          correct_option: "Substituição da chave aleatória por uma chave pseudo-aleatória gerada a partir de uma semente."
        },
        {
          question: "O que significa que uma cifra é semanticamente segura?",
          options: [
            "A cifra é invulnerável a ataques de força bruta.",
            "A cifra garante a integridade dos dados cifrados.",
            "A probabilidade de o adversário acertar na mensagem cifrada é aproximadamente igual à probabilidade de errar.",
            "A cifra é invulnerável a ataques de análise de tráfego."
          ],
          correct_option: "A probabilidade de o adversário acertar na mensagem cifrada é aproximadamente igual à probabilidade de errar."
        },
        {
          question: "Em que situações as cifras de chave simétrica contínua são adequadas?",
          options: [
            "Quando o canal de comunicação é seguro e não pode ser escutado.",
            "Quando o canal de comunicação pode ser escutado, mas não manipulado.",
            "Quando o canal de comunicação pode ser escutado e manipulado.",
            "Quando o canal de comunicação é totalmente inseguro."
          ],
          correct_option: "Quando o canal de comunicação pode ser escutado, mas não manipulado."
        },
        {
          question: "Qual é um exemplo de cifra de chave simétrica contínua?",
          options: [
            "Data Encryption Standard (DES)",
            "Public Key Infrastructure (PKI)",
            "Advanced Encryption Standard (AES)",
            "Diffie-Hellman key exchange"
          ],
          correct_option: "Data Encryption Standard (DES)"
        },
        {
          question: "O que é uma cifra de chave simétrica por blocos?",
          options: [
            "Uma cifra que opera em blocos de tamanho fixo e usa uma chave pseudo-aleatória.",
            "Uma cifra que opera em blocos de tamanho fixo e usa uma chave aleatória.",
            "Uma cifra que opera em blocos de tamanho variável e usa uma chave pseudo-aleatória.",
            "Uma cifra que opera em blocos de tamanho variável e usa uma chave aleatória."
          ],
          correct_option: "Uma cifra que opera em blocos de tamanho fixo e usa uma chave pseudo-aleatória."
        },
        {
          question: "O que é o Eletronic Code Book (ECB)?",
          options: [
            "Um modo de cifra que divide a mensagem em blocos e cifra cada bloco independentemente dos outros.",
            "Um modo de cifra que gera blocos pseudo-aleatórios para cifrar a mensagem.",
            "Um modo de cifra que utiliza uma função de expansão da chave de cifra.",
            "Um modo de cifra que permite o acesso aleatório a dados cifrados."
          ],
          correct_option: "Um modo de cifra que divide a mensagem em blocos e cifra cada bloco independentemente dos outros."
        },
        {
          question: "O que é o Cipher Block Chaining (CBC)?",
          options: [
            "Um modo de cifra que utiliza uma função de expansão da chave de cifra.",
            "Um modo de cifra que gera blocos pseudo-aleatórios para cifrar a mensagem.",
            "Um modo de cifra que divide a mensagem em blocos e cifra cada bloco independentemente dos outros.",
            "Um modo de cifra que utiliza um vetor de inicialização para introduzir aleatoriedade no processo de cifragem."
          ],
          correct_option: "Um modo de cifra que utiliza um vetor de inicialização para introduzir aleatoriedade no processo de cifragem."
        },
        {
          question: "O que é o Deterministic Counter Mode (CTR)?",
          options: [
            "Um modo de cifra que utiliza uma função de expansão da chave de cifra.",
            "Um modo de cifra que gera blocos pseudo-aleatórios para cifrar a mensagem.",
            "Um modo de cifra que divide a mensagem em blocos e cifra cada bloco independentemente dos outros.",
            "Um modo de cifra que utiliza um vetor de inicialização aleatório para cada combinação chave/mensagem."
          ],
          correct_option: "Um modo de cifra que utiliza um vetor de inicialização aleatório para cada combinação chave/mensagem."
        },
        {
          question: "O que é uma PRP (Pseudo Random Permutation)?",
          options: [
            "Uma função que aceita uma chave e um bloco de bits e devolve um bloco com o mesmo tamanho.",
            "Uma função que aceita uma chave e um bloco de bits e devolve um bloco de tamanho fixo.",
            "Uma função que aceita uma chave e um bloco de bits e devolve uma chave de tamanho fixo.",
            "Uma função que aceita uma chave e um bloco de bits e devolve uma chave de tamanho variável."
          ],
          correct_option: "Uma função que aceita uma chave e um bloco de bits e devolve um bloco com o mesmo tamanho."
        },
        {
          question: "O que é uma rede de Feistel?",
          options: [
            "Uma função que é sempre invertível e construída a partir de funções que podem não ter inversa.",
            "Uma função que é sempre invertível e construída a partir de funções que também são sempre invertíveis.",
            "Uma função que é sempre invertível e construída a partir de funções que são escolhidas ao acaso.",
            "Uma função que é sempre invertível e construída a partir de funções que são construídas a partir de Pseudo Random Functions (PRF)."
          ],
          correct_option: "Uma função que é sempre invertível e construída a partir de funções que podem não ter inversa."
        },
        {
          question: "Qual é o teorema relacionado às redes de Feistel?",
          options: [
            "Teorema de Luby-Rackoff",
            "Teorema de Shannon",
            "Teorema de Kerckhoffs",
            "Teorema de Diffie-Hellman"
          ],
          correct_option: "Teorema de Luby-Rackoff"
        },
        {
          question: "O que é o Electronic Code Book (ECB)?",
          options: [
            "Um modo de cifra que cifra cada bloco de mensagem independentemente dos outros.",
            "Um modo de cifra que gera blocos pseudo-aleatórios para cifrar a mensagem.",
            "Um modo de cifra que utiliza um vetor de inicialização para introduzir aleatoriedade no processo de cifragem.",
            "Um modo de cifra que utiliza uma função de expansão da chave de cifra."
          ],
          correct_option: "Um modo de cifra que cifra cada bloco de mensagem independentemente dos outros."
        },
        {
          question: "O que é o Cipher Block Chaining (CBC)?",
          options: [
            "Um modo de cifra que utiliza um vetor de inicialização para introduzir aleatoriedade no processo de cifragem.",
            "Um modo de cifra que cifra cada bloco de mensagem independentemente dos outros.",
            "Um modo de cifra que gera blocos pseudo-aleatórios para cifrar a mensagem.",
            "Um modo de cifra que utiliza uma função de expansão da chave de cifra."
          ],
          correct_option: "Um modo de cifra que utiliza um vetor de inicialização para introduzir aleatoriedade no processo de cifragem."
        },
        {
          question: "O que é o Deterministic Counter Mode (CTR)?",
          options: [
            "Um modo de cifra que utiliza uma função de expansão da chave de cifra.",
            "Um modo de cifra que utiliza um vetor de inicialização para introduzir aleatoriedade no processo de cifragem.",
            "Um modo de cifra que gera blocos pseudo-aleatórios para cifrar a mensagem.",
            "Um modo de cifra que cifra cada bloco de mensagem independentemente dos outros."
          ],
          correct_option: "Um modo de cifra que utiliza um vetor de inicialização para introduzir aleatoriedade no processo de cifragem."
        },
        {
          question: "O que é o Electronic Code Book (ECB)?",
          options: [
            "Um modo de cifra que cifra cada bloco de mensagem independentemente dos outros.",
            "Um modo de cifra que gera blocos pseudo-aleatórios para cifrar a mensagem.",
            "Um modo de cifra que utiliza um vetor de inicialização para introduzir aleatoriedade no processo de cifragem.",
            "Um modo de cifra que utiliza uma função de expansão da chave de cifra."
          ],
          correct_option: "Um modo de cifra que cifra cada bloco de mensagem independentemente dos outros."
        },
        {
          question: "O que é o Cipher Block Chaining (CBC)?",
          options: [
            "Um modo de cifra que utiliza um vetor de inicialização para introduzir aleatoriedade no processo de cifragem.",
            "Um modo de cifra que cifra cada bloco de mensagem independentemente dos outros.",
            "Um modo de cifra que gera blocos pseudo-aleatórios para cifrar a mensagem.",
            "Um modo de cifra que utiliza uma função de expansão da chave de cifra."
          ],
          correct_option: "Um modo de cifra que utiliza um vetor de inicialização para introduzir aleatoriedade no processo de cifragem."
        },
        {
          question: "O que é o Deterministic Counter Mode (CTR)?",
          options: [
            "Um modo de cifra que utiliza uma função de expansão da chave de cifra.",
            "Um modo de cifra que utiliza um vetor de inicialização para introduzir aleatoriedade no processo de cifragem.",
            "Um modo de cifra que gera blocos pseudo-aleatórios para cifrar a mensagem.",
            "Um modo de cifra que cifra cada bloco de mensagem independentemente dos outros."
          ],
          correct_option: "Um modo de cifra que utiliza um vetor de inicialização para introduzir aleatoriedade no processo de cifragem."
        },
        {
          question: "O que é o Electronic Code Book (ECB)?",
          options: [
            "Um modo de cifra que cifra cada bloco de mensagem independentemente dos outros.",
            "Um modo de cifra que gera blocos pseudo-aleatórios para cifrar a mensagem.",
            "Um modo de cifra que utiliza um vetor de inicialização para introduzir aleatoriedade no processo de cifragem.",
            "Um modo de cifra que utiliza uma função de expansão da chave de cifra."
          ],
          correct_option: "Um modo de cifra que cifra cada bloco de mensagem independentemente dos outros."
        },
        {
          question: "O que é o Cipher Block Chaining (CBC)?",
          options: [
            "Um modo de cifra que utiliza um vetor de inicialização para introduzir aleatoriedade no processo de cifragem.",
            "Um modo de cifra que cifra cada bloco de mensagem independentemente dos outros.",
            "Um modo de cifra que gera blocos pseudo-aleatórios para cifrar a mensagem.",
            "Um modo de cifra que utiliza uma função de expansão da chave de cifra."
          ],
          correct_option: "Um modo de cifra que utiliza um vetor de inicialização para introduzir aleatoriedade no processo de cifragem."
        },
        {
          question: "O que é o Deterministic Counter Mode (CTR)?",
          options: [
            "Um modo de cifra que utiliza uma função de expansão da chave de cifra.",
            "Um modo de cifra que utiliza um vetor de inicialização para introduzir aleatoriedade no processo de cifragem.",
            "Um modo de cifra que gera blocos pseudo-aleatórios para cifrar a mensagem.",
            "Um modo de cifra que cifra cada bloco de mensagem independentemente dos outros."
          ],
          correct_option: "Um modo de cifra que utiliza um vetor de inicialização para introduzir aleatoriedade no processo de cifragem."
        },
        {
        question: "Qual é um dos principais alvos dos ataques em sistemas criptográficos?",
        options: [
        "A confidencialidade dos dados.",
        "A integridade dos dados.",
        "A disponibilidade dos dados.",
        "A chave de cifra."
        ],
        correct_option: "A chave de cifra."
        },
        {
        question: "Qual é a abordagem mais direta para gerar e distribuir chaves de cifra antes da comunicação?",
        options: [
        "Todos os pares partilham uma chave de cifra de chaves de sessão.",
        "Todas as entidades partilham uma chave de cifra de chaves de sessão com um agente de confiança.",
        "Protocolo de Diffie-Hellman.",
        "Puzzles de Merkle."
        ],
        correct_option: "Todas as entidades partilham uma chave de cifra de chaves de sessão com um agente de confiança."
        },
        {
        question: "O protocolo de Diffie-Hellman é seguro apenas no caso em que:",
        options: [
        "Um adversário pode escutar a comunicação, mas não manipulá-la.",
        "Ambas as entidades partilham uma chave pré-estabelecida.",
        "A chave de sessão é cifrada com a chave de cifra privada.",
        "O adversário não tem acesso aos puzzles de Merkle."
        ],
        correct_option: "Um adversário pode escutar a comunicação, mas não manipulá-la."
        },
        {
        question: "Qual é o problema fundamental no protocolo de Diffie-Hellman e na cifra RSA?",
        options: [
        "O problema da fatorização em números primos.",
        "O problema da geração de chaves de sessão.",
        "O problema da distribuição das chaves de cifra.",
        "O problema do logaritmo discreto."
        ],
        correct_option: "O problema do logaritmo discreto."
        },
        {
        question: "O que é uma função de hash criptográfica?",
        options: [
        "Uma função que produz um valor de hash único para cada mensagem.",
        "Uma função que produz um valor de hash curto para cada mensagem.",
        "Uma função que produz um valor de hash facilmente computável.",
        "Uma função que torna computacionalmente inviável encontrar duas mensagens com o mesmo valor de hash."
        ],
        correct_option: "Uma função que torna computacionalmente inviável encontrar duas mensagens com o mesmo valor de hash."
        },
        {
          question: "Como é construída uma função de hash no esquema de Merkle-Damgard?",
          options: [
            "Aplicando a função de hash a cada bloco da mensagem e ao resumo obtido no passo anterior.",
            "Combinando os blocos da mensagem em peças de 32 bits e aplicando a função de hash.",
            "Dividindo a mensagem em blocos de 512 bits e combinando-os com palavras de 32 bits.",
            "Utilizando uma função de permutação pseudo-aleatória segura."
          ],
          correct_option: "Aplicando a função de hash a cada bloco da mensagem e ao resumo obtido no passo anterior."
        },
        {
          question: "Qual é o tamanho do estado utilizado pelo algoritmo MD5?",
          options: [
            "64 bits.",
            "128 bits.",
            "160 bits.",
            "512 bits."
          ],
          correct_option: "128 bits."
        },
        {
          question: "O que o algoritmo HMAC utiliza para garantir a integridade das mensagens?",
          options: [
            "Funções de permutação pseudo-aleatórias seguras.",
            "Funções de hash criptográficas.",
            "Chaves de cifra privadas.",
            "Chaves de sessão."
          ],
          correct_option: "Funções de hash criptográficas."
        },
        {
          question: "Qual é a diferença entre ECBC-MAC e HMAC?",
          options: [
            "ECBC-MAC utiliza funções de permutação pseudo-aleatórias seguras, enquanto HMAC utiliza funções de hash criptográficas.",
            "ECBC-MAC utiliza chaves de cifra privadas, enquanto HMAC utiliza chaves de sessão.",
            "ECBC-MAC é mais seguro do que HMAC.",
            "ECBC-MAC permite o processamento paralelo, enquanto HMAC não."
          ],
          correct_option: "ECBC-MAC utiliza funções de permutação pseudo-aleatórias seguras, enquanto HMAC utiliza funções de hash criptográficas."
        },
        {
          question: "Qual é o objetivo principal da criptografia?",
          options: [
            "Garantir a confidencialidade dos dados.",
            "Garantir a integridade dos dados.",
            "Garantir a disponibilidade dos dados.",
            "Garantir a autenticidade dos dados."
          ],
          correct_option: "Garantir a confidencialidade dos dados."
        },
        {
          question: "O que é um agente de confiança em um sistema de comunicações?",
          options: [
            "Uma entidade responsável pela geração e distribuição das chaves de cifra.",
            "Um adversário mal-intencionado que tenta comprometer a segurança do sistema.",
            "Um algoritmo utilizado para cifrar e decifrar chaves de sessão.",
            "Uma entidade confiável em quem os utilizadores confiam e com quem podem ter chaves pré-estabelecidas."
          ],
          correct_option: "Uma entidade confiável em quem os utilizadores confiam e com quem podem ter chaves pré-estabelecidas."
        },
        {
          question: "Qual é o problema tratado pelo protocolo de Diffie-Hellman?",
          options: [
            "Distribuição de chaves de cifra.",
            "Comprometimento da chave de cifra.",
            "Estabelecimento de uma chave de sessão em um canal público.",
            "Decifração de puzzles de Merkle."
          ],
          correct_option: "Estabelecimento de uma chave de sessão em um canal público."
        },
        {
          question: "O que é um Puzzle de Merkle?",
          options: [
            "Um mecanismo de criptografia de chave simétrica.",
            "Um protocolo de acordo de chaves baseado em logaritmo discreto.",
            "Um método para decifrar uma chave de sessão.",
            "Um conjunto de puzzles baralhados e cifrados enviados para um segundo interveniente."
          ],
          correct_option: "Um conjunto de puzzles baralhados e cifrados enviados para um segundo interveniente."
        },
        {
          question: "Qual é a abordagem mais direta para a geração e distribuição de chaves de cifra em sistemas criptográficos?",
          options: [
            "Todos os pares partilham uma chave de cifra de chaves de sessão.",
            "Todas as entidades partilham uma chave de cifra de chaves de sessão com um agente de confiança.",
            "Protocolo de Diffie-Hellman.",
            "Puzzles de Merkle."
          ],
          correct_option: "Todas as entidades partilham uma chave de cifra de chaves de sessão com um agente de confiança."
        },
        {
          question: "Qual é o problema tratado pelo logaritmo discreto?",
          options: [
            "Estabelecimento de uma chave de sessão em um canal público.",
            "Comprometimento da chave de cifra.",
            "Distribuição de chaves de cifra.",
            "Dificuldade de encontrar o valor xx dado o valor gg e g^xg."
          ],
          correct_option: "Dificuldade de encontrar o valor xx dado o valor gg e g^xg."
        },
        {
          question: "Qual é o melhor algoritmo conhecido para resolver o problema do logaritmo discreto?",
          options: [
            "Diffie-Hellman.",
            "Puzzles de Merkle.",
            "General Number Field Sieve.",
            "RSA."
          ],
          correct_option: "General Number Field Sieve."
        },
        {
          question: "Qual é a base do protocolo de chaves Diffie-Hellman e da cifra RSA?",
          options: [
            "O problema do logaritmo discreto.",
            "A fatorização em números primos.",
            "A distribuição de chaves de cifra.",
            "A geração de chaves de sessão."
          ],
          correct_option: "O problema do logaritmo discreto."
        },
        {
          question: "O que define uma função de hash criptográfica?",
          options: [
            "Ser computacionalmente fácil de calcular.",
            "Ser uma função não injetiva.",
            "Ser resistente à descoberta de um texto original.",
            "Ser compressora."
          ],
          correct_option: "Ser resistente à descoberta de um texto original."
        },
        {
          question: "O que é uma função de hash criptográfica resistente a colisões?",
          options: [
            "Uma função que produz o mesmo valor de hash para quaisquer duas mensagens diferentes.",
            "Uma função que produz diferentes valores de hash para quaisquer duas mensagens diferentes.",
            "Uma função que é fácil de calcular.",
            "Uma função que é resistente à descoberta de um segundo texto original."
          ],
          correct_option: "Uma função que produz o mesmo valor de hash para quaisquer duas mensagens diferentes."
        },
        {
          question: "Qual é a construção iterativa utilizada pela função de hash de Merkle-Damgard?",
          options: [
            "Combinação de palavras definidas com os blocos da mensagem.",
            "Compressão da mensagem em blocos de 512 bits.",
            "Aplicação do gerador gg a um vetor de inicialização e ao primeiro bloco da mensagem.",
            "Divisão da mensagem em peças de 32 bits."
          ],
          correct_option: "Aplicação do gerador gg a um vetor de inicialização e ao primeiro bloco da mensagem."
        },
        {
          question: "Qual é o tamanho do estado utilizado pelo algoritmo MD5?",
          options: [
            "64 bits.",
            "128 bits.",
            "160 bits.",
            "256 bits."
          ],
          correct_option: "128 bits."
        },
        {
          question: "Como o algoritmo MD5 processa uma mensagem?",
          options: [
            "Dividindo-a em blocos de 512 bits e combinando-os com palavras definidas.",
            "Aplicando um gerador a um vetor de inicialização e ao primeiro bloco da mensagem.",
            "Utilizando funções de permutação pseudo-aleatórias seguras.",
            "Comprimindo-a em peças de 32 bits e combinando-as com palavras definidas."
          ],
          correct_option: "Dividindo-a em blocos de 512 bits e combinando-os com palavras definidas."
        },
        {
          question: "Qual é o objetivo principal do algoritmo HMAC?",
          options: [
            "Garantir a confidencialidade dos dados.",
            "Garantir a integridade dos dados.",
            "Garantir a disponibilidade dos dados.",
            "Garantir a autenticidade dos dados."
          ],
          correct_option: "Garantir a integridade dos dados."
        },
        {
          question: "O que é uma função de hash criptográfica segura?",
          options: [
            "Uma função que produz um valor de hash único para cada mensagem.",
            "Uma função que produz um valor de hash curto para cada mensagem.",
            "Uma função que é fácil de calcular.",
            "Uma função que é resistente à descoberta de um texto original e à colisão."
          ],
          correct_option: "Uma função que é resistente à descoberta de um texto original e à colisão."
        },
        {
          question: "O que diferencia o ECBC-MAC do HMAC?",
          options: [
            "O ECBC-MAC utiliza funções de permutação pseudo-aleatórias seguras, enquanto o HMAC utiliza funções de hash criptográficas.",
            "O ECBC-MAC utiliza chaves de cifra privadas, enquanto o HMAC utiliza chaves de sessão.",
            "O ECBC-MAC é mais seguro do que o HMAC.",
            "O ECBC-MAC permite o processamento paralelo, enquanto o HMAC não."
          ],
          correct_option: "O ECBC-MAC utiliza funções de permutação pseudo-aleatórias seguras, enquanto o HMAC utiliza funções de hash criptográficas."
        },
        {
          question: "O que é necessário para garantir a autenticidade dos dados em um sistema criptográfico?",
          options: [
            "Funções de permutação pseudo-aleatórias seguras.",
            "Funções de hash criptográficas.",
            "Chaves de cifra privadas.",
            "Chaves de autenticação."
          ],
          correct_option: "Chaves de autenticação."
        },
        {
          question: "Qual é o objetivo principal da criptografia simétrica?",
          options: [
            "Garantir a confidencialidade dos dados.",
            "Garantir a integridade dos dados.",
            "Garantir a disponibilidade dos dados.",
            "Garantir a autenticidade dos dados."
          ],
          correct_option: "Garantir a confidencialidade dos dados."
        },
        {
          question: "Qual é o objetivo principal da criptografia assimétrica?",
          options: [
            "Garantir a confidencialidade dos dados.",
            "Garantir a integridade dos dados.",
            "Garantir a disponibilidade dos dados.",
            "Garantir a autenticidade dos dados."
          ],
          correct_option: "Garantir a autenticidade dos dados."
        },
        {
          question: "O que é necessário para garantir a confidencialidade dos dados em um sistema criptográfico?",
          options: [
            "Funções de permutação pseudo-aleatórias seguras.",
            "Funções de hash criptográficas.",
            "Chaves de cifra privadas.",
            "Chaves de autenticação."
          ],
          correct_option: "Chaves de cifra privadas."
        },
        {
          question: "O que é necessário para garantir a integridade dos dados em um sistema criptográfico?",
          options: [
            "Funções de permutação pseudo-aleatórias seguras.",
            "Funções de hash criptográficas.",
            "Chaves de cifra privadas.",
            "Chaves de autenticação."
          ],
          correct_option: "Funções de hash criptográficas."
        },
        {
          question: "O que é um sistema de cifra de chave pública?",
          options: [
            "Um conjunto de algoritmos para criptografar mensagens simetricamente.",
            "Um conjunto de algoritmos eficientes que incluem chaves pública e privada.",
            "Um conjunto de algoritmos que fornecem autenticação de mensagens.",
            "Um conjunto de algoritmos para gerar chaves de sessão seguras."
          ],
          correct_option: "Um conjunto de algoritmos eficientes que incluem chaves pública e privada."
        },
        {
          question: "O que é uma função de sentido único com alçapão?",
          options: [
            "Uma função que pode ser avaliada eficientemente, mas não invertida sem um segredo.",
            "Uma função que permite criptografar e descriptografar mensagens.",
            "Uma função que gera números primos grandes.",
            "Uma função que garante a autenticidade das chaves públicas."
          ],
          correct_option: "Uma função que pode ser avaliada eficientemente, mas não invertida sem um segredo."
        },
        {
          question: "Qual método de cifração é usado no protocolo Diffie-Hellman?",
          options: [
            "Cifração simétrica.",
            "Cifração assimétrica.",
            "Cifração por blocos.",
            "Cifração híbrida."
          ],
          correct_option: "Cifração simétrica."
        },
        {
          question: "Qual é o problema intratável relacionado ao RSA?",
          options: [
            "Encontrar os números primos usados na geração da chave pública.",
            "Encontrar os números primos usados na geração da chave privada.",
            "Decompor o número N em seus fatores primos.",
            "Calcular a função inversa do RSA."
          ],
          correct_option: "Decompor o número N em seus fatores primos."
        },
        {
          question: "O que é OAEP (Optimal Asymmetric Encryption Padding)?",
          options: [
            "Uma função que verifica a validade dos certificados digitais.",
            "Um algoritmo de assinatura digital baseado em chave simétrica.",
            "Uma função de pré-processamento da mensagem antes da cifração.",
            "Um protocolo para distribuição segura de chaves públicas."
          ],
          correct_option: "Uma função de pré-processamento da mensagem antes da cifração."
        },
        {
          question: "O que é um sistema de assinatura digital?",
          options: [
            "Um conjunto de algoritmos que criptografa e descriptografa mensagens.",
            "Um conjunto de algoritmos que gera chaves pública e privada.",
            "Um conjunto de algoritmos que verifica a validade dos certificados digitais.",
            "Um conjunto de algoritmos que permite verificar a autenticidade de uma mensagem."
          ],
          correct_option: "Um conjunto de algoritmos que permite verificar a autenticidade de uma mensagem."
        },
        {
          question: "Qual é uma propriedade da assinatura digital?",
          options: [
            "Autenticação da origem da informação.",
            "Integridade dos dados.",
            "Garantia de não-repúdio.",
            "Todas as opções anteriores."
          ],
          correct_option: "Todas as opções anteriores."
        },
        {
          question: "O que é um certificado de chave pública?",
          options: [
            "Um documento eletrônico que liga um certificado a uma entidade em particular.",
            "Uma estrutura que associa uma chave pública a uma entidade em particular.",
            "Uma lista de revogação de certificados digitais.",
            "Uma chave pública usada para criptografar mensagens."
          ],
          correct_option: "Uma estrutura que associa uma chave pública a uma entidade em particular."
        },
        {
          question: "Qual é a norma que especifica a sintaxe dos certificados de chave pública?",
          options: [
            "X.509.",
            "RFC.",
            "PKI.",
            "ITU."
          ],
          correct_option: "X.509."
        },
        {
          question: "O que é uma Public Key Infrastructure (PKI)?",
          options: [
            "Um conjunto de hardware para a criação e gestão de certificados digitais.",
            "Um conjunto de políticas e procedimentos para a gestão de chaves públicas.",
            "Um conjunto de protocolos para a distribuição de certificados digitais.",
            "Um conjunto de hardware, software, pessoas, políticas e procedimentos para a criação, gestão e distribuição de certificados digitais."
          ],
          correct_option: "Um conjunto de hardware, software, pessoas, políticas e procedimentos para a criação, gestão e distribuição de certificados digitais."
        },
        {
          question: "O que são as Listas de Revogação de Certificados (LRC)?",
          options: [
            "Documentos com números de série de certificados que expiraram.",
            "Documentos com números de série de certificados revogados.",
            "Documentos com números de série de certificados válidos."
          ],
          correct_option: "Documentos com números de série de certificados revogados."
        },
        {
          question: "O que é o PGP?",
          options: [
            "Um protocolo de rede utilizado para transferência de ficheiros.",
            "Um software que fornece serviços de segurança em comunicações eletrónicas.",
            "Um algoritmo de compressão de dados."
          ],
          correct_option: "Um software que fornece serviços de segurança em comunicações eletrónicas."
        },
        {
          question: "No PGP, um utilizador tem quantos pares de chaves?",
          options: [
            "Um par de chaves.",
            "Dois pares de chaves.",
            "Três pares de chaves."
          ],
          correct_option: "Dois pares de chaves."
        },
        {
          question: "O que é confiança marginal na rede de confiança do PGP?",
          options: [
            "Confiança absoluta nas chaves de um utilizador.",
            "Confiança parcial nas chaves de um utilizador.",
            "Falta de confiança nas chaves de um utilizador."
          ],
          correct_option: "Confiança parcial nas chaves de um utilizador."
        },
        {
          question: "O que um utilizador faz se as chaves públicas do PGP forem comprometidas?",
          options: [
            "Emite um certificado a revogar as suas próprias chaves públicas.",
            "Nomeia outro utilizador para revogar as suas chaves públicas.",
            "Gera novas chaves públicas e revoga as antigas."
          ],
          correct_option: "Emite um certificado a revogar as suas próprias chaves públicas."
        },
        {
          question: "Quantos pares de chaves um cartão de cidadão possui?",
          options: [
            "Um par de chaves.",
            "Dois pares de chaves.",
            "Três pares de chaves."
          ],
          correct_option: "Dois pares de chaves."
        },
        {
          question: "O que é uma política de segurança?",
          options: [
            "Um software utilizado para proteger sistemas de informação.",
            "Um documento escrito que estabelece os objetivos de segurança de uma organização.",
            "Um protocolo de segurança utilizado em redes de computadores."
          ],
          correct_option: "Um documento escrito que estabelece os objetivos de segurança de uma organização."
        },
        {
          question: "Como são identificadas as vulnerabilidades em um sistema operativo?",
          options: [
            "Através da análise da arquitetura do hardware.",
            "Através da identificação do sistema operativo e suas vulnerabilidades.",
            "Através da análise do software aplicativo instalado no sistema."
          ],
          correct_option: "Através da identificação do sistema operativo e suas vulnerabilidades."
        },
        {
          question: "O que é um ataque de negação de serviço (DDoS)?",
          options: [
            "Um ataque que explora vulnerabilidades de software para ganhar acesso não autorizado a um sistema.",
            "Um ataque que visa sobrecarregar um sistema ou rede, tornando-o inacessível aos utilizadores legítimos.",
            "Um ataque que tenta capturar informações confidenciais, como senhas e números de cartão de crédito."
          ],
          correct_option: "Um ataque que visa sobrecarregar um sistema ou rede, tornando-o inacessível aos utilizadores legítimos."
        },
        {
          question: "O que é um firewall?",
          options: [
            "Um software malicioso que se espalha para outros sistemas sem autorização.",
            "Um dispositivo de hardware ou software que controla o tráfego de rede e aplica políticas de segurança.",
            "Um protocolo de rede utilizado para transferência de dados entre sistemas."
          ],
          correct_option: "Um dispositivo de hardware ou software que controla o tráfego de rede e aplica políticas de segurança."
        },
        {
          question: "O que é autenticação de dois fatores?",
          options: [
            "Um método de autenticação que requer duas senhas diferentes.",
            "Um método de autenticação que combina uma senha com um fator adicional, como um código enviado para um dispositivo móvel.",
            "Um método de autenticação que utiliza reconhecimento biométrico, como impressão digital ou reconhecimento facial."
          ],
          correct_option: "Um método de autenticação que combina uma senha com um fator adicional, como um código enviado para um dispositivo móvel."
        },
        {
          question: "O que é criptografia simétrica?",
          options: [
            "Um tipo de criptografia em que a mesma chave é usada tanto para criptografar quanto para descriptografar os dados.",
            "Um tipo de criptografia que usa chaves públicas e privadas para criptografar e descriptografar os dados.",
            "Um tipo de criptografia em que a chave de criptografia é mantida em segredo."
          ],
          correct_option: "Um tipo de criptografia em que a mesma chave é usada tanto para criptografar quanto para descriptografar os dados."
        },
        {
          question: "O que é um ataque de phishing?",
          options: [
            "Um ataque que visa ganhar acesso não autorizado a um sistema explorando vulnerabilidades conhecidas.",
            "Um ataque que envia mensagens falsas ou enganosas, geralmente por e-mail, na tentativa de obter informações pessoais ou financeiras dos utilizadores.",
            "Um ataque que tenta sobrecarregar um sistema ou rede, tornando-o inacessível aos utilizadores legítimos."
          ],
          correct_option: "Um ataque que envia mensagens falsas ou enganosas, geralmente por e-mail, na tentativa de obter informações pessoais ou financeiras dos utilizadores."
        },
        {
          question: "O que é um backup?",
          options: [
            "Um ataque que tenta explorar uma vulnerabilidade de segurança conhecida em um sistema.",
            "Uma cópia de segurança dos dados importantes de um sistema, para protegê-los contra perda ou dano.",
            "Um método de autenticação que requer a inserção física de um dispositivo em um sistema para conceder acesso."
          ],
          correct_option: "Uma cópia de segurança dos dados importantes de um sistema, para protegê-los contra perda ou dano."
        },
        {
          question: "Qual é o termo utilizado para se referir à mensagem original antes de ser criptografada?",
          options: [
          "Texto-cifrado",
          "Criptograma",
          "Texto-limpo"
          ],
          correct_option: "Texto-limpo"
          },
          {
          question: "O que é um sistema criptográfico?",
          options: [
          "Um algoritmo de criptografia",
          "Um conjunto de chaves de criptografia",
          "Um conjunto de algoritmos de criptografia, chaves de criptografia, algoritmos de decifração e chaves de decifração"
          ],
          correct_option: "Um conjunto de algoritmos de criptografia, chaves de criptografia, algoritmos de decifração e chaves de decifração"
          },
          {
          question: "Qual é o dispositivo que controla o tráfego de dados e define regras de acesso e filtragem de pacotes?",
          options: [
          "IDS",
          "Firewall",
          "IPS"
          ],
          correct_option: "Firewall"
          },
          {
          question: "Qual é o termo utilizado para se referir a uma pessoa que utiliza seus conhecimentos técnicos para explorar falhas de segurança?",
          options: [
          "Hacker",
          "White hat",
          "Grey hat"
          ],
          correct_option: "Hacker"
          },
          {
          question: "O que é um IDS?",
          options: [
          "Um sistema de deteção de intrusão",
          "Um sistema de deteção e prevenção de intrusão",
          "Um dispositivo de segurança"
          ],
          correct_option: "Um sistema de deteção de intrusão"
          },
          {
          question: "Qual é a característica do sistema que o torna vulnerável a determinados ataques?",
          options: [
          "Vulnerabilidade",
          "Exploit",
          "Ataque"
          ],
          correct_option: "Vulnerabilidade"
          },
          {
          question: "O que é um ataque de negação de serviço (DoS)?",
          options: [
          "Um ataque que explora vulnerabilidades de software para ganhar acesso não autorizado a um sistema",
          "Um ataque que visa sobrecarregar um sistema ou rede, tornando-o inacessível aos utilizadores legítimos",
          "Um ataque que tenta capturar informações confidenciais, como senhas e números de cartão de crédito"
          ],
          correct_option: "Um ataque que visa sobrecarregar um sistema ou rede, tornando-o inacessível aos utilizadores legítimos"
          },
          {
          question: "O que é uma política de segurança?",
          options: [
          "Um software utilizado para proteger sistemas de informação",
          "Um documento escrito que estabelece os objetivos de segurança de uma organização",
          "Um protocolo de segurança utilizado em redes"
          ],
          correct_option: "Um documento escrito que estabelece os objetivos de segurança de uma organização"
          },
          {
          question: "O que é um vírus?",
          options: [
          "Um programa que se propaga e se dissemina sozinho pela rede, com a ajuda da execução de um programa hospedeiro",
          "Um tipo de firewall",
          "Um sistema de deteção de intrusão"
          ],
          correct_option: "Um programa que se propaga e se dissemina sozinho pela rede, com a ajuda da execução de um programa hospedeiro"
          },
          {
          question: "Qual é o termo utilizado para se referir a um programa que se disfarça de um programa legítimo, mas executa um código malicioso?",
          options: [
          "Exploit",
          "Worm",
          "Cavalo de troia"
          ],
          correct_option: "Cavalo de troia"
          },
          {
          question: "Qual é o termo utilizado para se referir a um hacker que utiliza seus conhecimentos para melhorar a segurança de sistemas?",
          options: [
          "Script kiddie",
          "Black hat",
          "White hat"
          ],
          correct_option: "White hat"
          },
          {
          question: "O que é um IPS?",
          options: [
          "Um sistema de deteção e prevenção de intrusão",
          "Um dispositivo de rede",
          "Um tipo de vírus"
          ],
          correct_option: "Um sistema de deteção e prevenção de intrusão"
          },
          {
          question: "O que é um worm?",
          options: [
          "Um programa que se propaga e se dissemina sozinho pela rede, sem precisar de um programa hospedeiro",
          "Um tipo de firewall",
          "Um algoritmo de criptografia"
          ],
          correct_option: "Um programa que se propaga e se dissemina sozinho pela rede, sem precisar de um programa hospedeiro"
          },
          {
          question: "Qual é o termo utilizado para se referir a um hacker que consegue encontrar vulnerabilidades de segurança e as explora sem fins maliciosos?",
          options: [
          "Grey hat",
          "Black hat",
          "White hat"
          ],
          correct_option: "Grey hat"
          },
          {
          question: "O que é um exploit?",
          options: [
          "Um ataque que tenta capturar informações confidenciais",
          "Um conjunto de instruções que explora uma vulnerabilidade",
          "Um sistema de criptografia"
          ],
          correct_option: "Um conjunto de instruções que explora uma vulnerabilidade"
          },
          {
          question: "O que é um script kiddie?",
          options: [
          "Um hacker que utiliza suas próprias ferramentas personalizadas",
          "Um hacker que utiliza ferramentas de hackers sem conhecimentos técnicos",
          "Um tipo de vírus"
          ],
          correct_option: "Um hacker que utiliza ferramentas de hackers sem conhecimentos técnicos"
          },
          {
          question: "O que é um sistema de deteção de intrusão (IDS)?",
          options: [
          "Um dispositivo de segurança",
          "Um sistema de deteção e prevenção de intrusão",
          "Um algoritmo de criptografia"
          ],
          correct_option: "Um dispositivo de segurança"
          },
          {
          question: "O que é uma vulnerabilidade?",
          options: [
          "Um sistema de criptografia",
          "Uma característica do sistema que o torna vulnerável a determinados ataques",
          "Um algoritmo de decifração"
          ],
          correct_option: "Uma característica do sistema que o torna vulnerável a determinados ataques"
          },
          {
          question: "Qual é o dispositivo que monitoriza a rede e bloqueia ataques?",
          options: [
          "Firewall",
          "IDS",
          "IPS"
          ],
          correct_option: "IPS"
          },
          {
            question: "O que é criptografia?",
            options: [
            "Um conjunto de técnicas para a quebra de sistemas criptográficos",
            "Um mecanismo para troca de chaves",
            "Um conjunto de técnicas para comunicação secreta entre dois agentes"
            ],
            correct_option: "Um conjunto de técnicas para comunicação secreta entre dois agentes"
            },
            {
            question: "Qual é uma das motivações da criptografia?",
            options: [
            "Confidencialidade",
            "Difusão",
            "Semântica"
            ],
            correct_option: "Confidencialidade"
            },
            {
            question: "O que é criptanálise?",
            options: [
            "Um algoritmo para cifrar e decifrar",
            "Um conjunto de técnicas para a quebra de sistemas criptográficos",
            "Uma técnica para troca segura de chaves"
            ],
            correct_option: "Um conjunto de técnicas para a quebra de sistemas criptográficos"
            },
            {
            question: "O que são cifras clássicas?",
            options: [
            "Algoritmos que utilizam diferentes chaves para cifrar e decifrar",
            "Algoritmos que utilizam a mesma chave para cifrar e decifrar",
            "Algoritmos que não utilizam chaves"
            ],
            correct_option: "Algoritmos que utilizam a mesma chave para cifrar e decifrar"
            },
            {
            question: "Quais são algumas propriedades necessárias de cifras seguras?",
            options: [
            "Difusão, Confusão, Não determinística",
            "Difusão, Confusão, Maneabilidade",
            "Confusão, Semântica, Não determinística"
            ],
            correct_option: "Difusão, Confusão, Não determinística"
            },
            {
            question: "O que são cifras de chave simétrica?",
            options: [
            "Algoritmos que utilizam a mesma chave para cifrar e decifrar",
            "Algoritmos que utilizam diferentes chaves para cifrar e decifrar",
            "Algoritmos que não utilizam chaves"
            ],
            correct_option: "Algoritmos que utilizam a mesma chave para cifrar e decifrar"
            },
            {
            question: "Qual é um exemplo de cifra de chave simétrica?",
            options: [
            "RC4",
            "RSA",
            "AES"
            ],
            correct_option: "RC4"
            },
            {
            question: "O que é padding?",
            options: [
            "Uma técnica de preenchimento de dados para garantir a integridade do texto cifrado",
            "Uma técnica de troca de chaves criptográficas",
            "Um algoritmo para gerar chaves aleatórias"
            ],
            correct_option: "Uma técnica de preenchimento de dados para garantir a integridade do texto cifrado"
            },
            {
            question: "O que são cifras de chave pública?",
            options: [
            "Algoritmos que utilizam a mesma chave para cifrar e decifrar",
            "Algoritmos que utilizam diferentes chaves para cifrar e decifrar",
            "Algoritmos que não utilizam chaves"
            ],
            correct_option: "Algoritmos que utilizam diferentes chaves para cifrar e decifrar"
            },
            {
            question: "Qual é um exemplo de cifra de chave pública?",
            options: [
            "RC4",
            "RSA",
            "AES"
            ],
            correct_option: "RSA"
            },
            {
            question: "Qual é uma das propriedades das cifras de chave simétrica contínuas?",
            options: [
            "Difusão",
            "Maneabilidade",
            "Semântica"
            ],
            correct_option: "Maneabilidade"
            },
            {
            question: "Qual é uma das propriedades das cifras de chave simétrica de bloco?",
            options: [
            "Difusão",
            "Confusão",
            "Semântica"
            ],
            correct_option: "Confusão"
            },
            {
            question: "Qual é o objetivo do algoritmo de criptografia RC4?",
            options: [
            "Cifrar e decifrar usando a mesma chave",
            "Garantir a integridade do texto cifrado",
            "Gerar chaves aleatórias"
            ],
            correct_option: "Cifrar e decifrar usando a mesma chave"
            },
            {
            question: "Qual é o objetivo do padding na criptografia?",
            options: [
            "Garantir a confusão do texto cifrado",
            "Garantir a difusão do texto cifrado",
            "Garantir que o tamanho do bloco de dados seja múltiplo do tamanho do bloco da cifra"
            ],
            correct_option: "Garantir que o tamanho do bloco de dados seja múltiplo do tamanho do bloco da cifra"
            },
            {
            question: "Qual é o objetivo das cifras de chave pública?",
            options: [
            "Cifrar e decifrar usando a mesma chave",
            "Garantir a integridade do texto cifrado",
            "Permitir a troca segura de chaves"
            ],
            correct_option: "Permitir a troca segura de chaves"
            },
            {
            question: "O que é difusão em criptografia?",
            options: [
            "A propriedade que garante que qualquer propriedade estatística do texto limpo está completamente difusa por todo o criptograma",
            "Um algoritmo para cifrar e decifrar",
            "Um método de troca de chaves"
            ],
            correct_option: "A propriedade que garante que qualquer propriedade estatística do texto limpo está completamente difusa por todo o criptograma"
            },
            {
            question: "O que é confusão em criptografia?",
            options: [
            "A propriedade que garante que não são perceptíveis quaisquer relações entre o texto-limpo, a chave de cifra e o criptograma",
            "Um algoritmo para cifrar e decifrar",
            "Uma técnica para troca segura de chaves"
            ],
            correct_option: "A propriedade que garante que não são perceptíveis quaisquer relações entre o texto-limpo, a chave de cifra e o criptograma"
            },
            {
            question: "O que é semântica em criptografia?",
            options: [
            "A propriedade que permite que a cifra produza saídas diferentes para o mesmo texto limpo e chave de cifra",
            "Um algoritmo para cifrar e decifrar",
            "Um método de troca de chaves"
            ],
            correct_option: "A propriedade que permite que a cifra produza saídas diferentes para o mesmo texto limpo e chave de cifra"
            },
            {
            question: "O que é maneabilidade em criptografia?",
            options: [
            "A propriedade que permite a alteração do texto cifrado sem alterar o texto limpo",
            "Um algoritmo para cifrar e decifrar",
            "Uma técnica para troca segura de chaves"
            ],
            correct_option: "A propriedade que permite a alteração do texto cifrado sem alterar o texto limpo"
            },
            {
            question: "O que é não determinística em criptografia?",
            options: [
            "A propriedade que garante que a cifra produza a mesma saída para o mesmo texto limpo e chave de cifra",
            "Um algoritmo para cifrar e decifrar",
            "Uma técnica para troca segura de chaves"
            ],
            correct_option: "A propriedade que garante que a cifra produza a mesma saída para o mesmo texto limpo e chave de cifra"
            },
            {
              question: "Qual é um exemplo de algoritmo de cifra pública?",
              options: [
              "AES",
              "RSA",
              "DES"
              ],
              correct_option: "RSA"
            },
            {
              question: "Qual é um exemplo de algoritmo de cifra simétrica de bloco?",
              options: [
              "RSA",
              "AES",
              "RC4"
              ],
              correct_option: "AES"
            },
            {
              question: "Qual é a força criptográfica mínima aceita atualmente?",
              options: [
              "40 bits",
              "64 bits",
              "80 bits"
              ],
              correct_option: "80 bits"
            },
            {
              question: "Qual é o objetivo do ataque de força bruta?",
              options: [
              "Descobrir a chave de cifra a partir de um texto-limpo original",
              "Tentar todas as possíveis chaves de cifra até encontrar a chave correta",
              "Descobrir a chave de cifra ou o texto-limpo a partir de um texto-cifrado escolhido pelo atacante"
              ],
              correct_option: "Tentar todas as possíveis chaves de cifra até encontrar a chave correta"
            },
            {
              question: "O que é um ataque com conhecimento apenas do criptograma?",
              options: [
              "Tentar descobrir a chave de cifra a partir de um texto-limpo original e do texto-cifrado correspondente",
              "Tentar descobrir a chave de cifra ou o texto-limpo a partir de um texto-cifrado",
              "Tentar descobrir a chave de cifra ou o texto-limpo a partir de um conjunto de textos-cifrados escolhidos pelo atacante"
              ],
              correct_option: "Tentar descobrir a chave de cifra ou o texto-limpo a partir de um texto-cifrado"
            },
            {
              question: "O que é um ataque com o texto-limpo original escolhido pelo atacante?",
              options: [
              "Tentar descobrir a chave de cifra a partir de um texto-limpo original e do texto-cifrado correspondente",
              "Tentar descobrir a chave de cifra ou o texto-limpo a partir de um texto-cifrado",
              "Tentar descobrir a chave de cifra ou o texto-limpo a partir de um texto-limpo original escolhido pelo atacante"
              ],
              correct_option: "Tentar descobrir a chave de cifra ou o texto-limpo a partir de um texto-limpo original escolhido pelo atacante"
            },
            {
              question: "O que é um ataque com o texto-limpo original escolhido pelo ataque adaptativo?",
              options: [
              "Tentar descobrir a chave de cifra a partir de um texto-limpo original e do texto-cifrado correspondente",
              "Tentar descobrir a chave de cifra ou o texto-limpo a partir de um texto-cifrado",
              "Tentar descobrir a chave de cifra ou o texto-limpo a partir de um texto-limpo original escolhido pelo atacante, obtendo exemplos de texto cifrado antes e depois de começar o ataque"
              ],
              correct_option: "Tentar descobrir a chave de cifra ou o texto-limpo a partir de um texto-limpo original escolhido pelo atacante, obtendo exemplos de texto cifrado antes e depois de começar o ataque"
            },
            {
              question: "O que é um ataque do homem no meio passivo?",
              options: [
              "A pessoa no meio consegue alterar e ver a mensagem cifrada",
              "A pessoa no meio apenas consegue ver a mensagem cifrada",
              ],
              correct_option: "A pessoa no meio apenas consegue ver a mensagem cifrada"
            },
            {
              question: "O que é um ataque do homem no meio ativo?",
              options: [
              "A pessoa no meio consegue alterar e ver a mensagem cifrada",
              "A pessoa no meio apenas consegue ver a mensagem cifrada",
              "A pessoa no meio não consegue alterar nem ver a mensagem cifrada"
              ],
              correct_option: "A pessoa no meio consegue alterar e ver a mensagem cifrada"
            },
            {
              question: "Qual é o modo de operação de cifra que consiste em cifrar cada bloco de dados de forma independente?",
              options: [
              "ECB",
              "CBC",
              "CFB"
              ],
              correct_option: "ECB"
            },
            {
              question: "Qual é o modo de operação de cifra que consiste em cifrar cada bloco de dados de forma dependente do bloco anterior?",
              options: [
              "ECB",
              "CBC",
              "OFB"
              ],
              correct_option: "CBC"
            },
            {
              question: "Qual é o tamanho mínimo da chave utilizada no algoritmo RSA?",
              options: [
              "128 bits",
              "512 bits",
              "1024 bits"
              ],
              correct_option: "512 bits"
            },
            {
              question: "Qual é o tamanho mínimo da chave utilizada no algoritmo AES?",
              options: [
              "64 bits",
              "128 bits",
              "256 bits"
              ],
              correct_option: "128 bits"
            },
            {
              question: "Qual é a propriedade que permite que a cifra produza saídas diferentes para o mesmo texto limpo e chave de cifra?",
              options: [
              "Integridade",
              "Semântica",
              "Maneabilidade"
              ],
              correct_option: "Semântica"
            },
            {
              question: "Qual é a propriedade que permite a alteração do texto cifrado sem alterar o texto limpo?",
              options: [
              "Integridade",
              "Semântica",
              "Maneabilidade"
              ],
              correct_option: "Maneabilidade"
            },
            {
              question: "Qual é a propriedade que garante que a cifra produza a mesma saída para o mesmo texto limpo e chave de cifra?",
              options: [
              "Determinística",
              "Não determinística",
              "Aleatória"
              ],
              correct_option: "Determinística"
            },
            {
              question: "O que é o algoritmo de cifra DES?",
              options: [
              "Um algoritmo de cifra simétrica",
              "Um algoritmo de cifra assimétrica",
              "Um algoritmo de compressão"
              ],
              correct_option: "Um algoritmo de cifra simétrica"
            },
            {
              question: "O que é um algoritmo IDS?",
              options: [
              "Um algoritmo de cifra simétrica",
              "Um algoritmo de compressão",
              "Um sistema de detecção de intrusões"
              ],
              correct_option: "Um sistema de detecção de intrusões"
            },
            {
              question: "O que é uma Firewall?",
              options: [
              "Um algoritmo de cifra simétrica",
              "Um algoritmo de compressão",
              "Um sistema de segurança de rede"
              ],
              correct_option: "Um sistema de segurança de rede"
            },
            {
              question: "O que é um AntiVirus?",
              options: [
              "Um IDS",
              "Uma Firewall",
              "Nenhuma das anteriores"
              ],
              correct_option: "Nenhuma das anteriores"
              },
              {
                question: "Qual é um modo de operação de cifra que consiste em cifrar continuamente a partir de uma cifra de blocos, usando um contador gerado aleatoriamente?",
                options: [
                "CBC",
                "CTR",
                "OFB"
                ],
                correct_option: "CTR"
                },
                {
                question: "O modo de operação de cifra CTR é considerado determinístico?",
                options: [
                "Sim",
                "Não"
                ],
                correct_option: "Não"
                },
                {
                question: "Qual é um exemplo de cifra de chave simétrica por bloco?",
                options: [
                "RSA",
                "AES",
                "DH"
                ],
                correct_option: "AES"
                },
                {
                question: "O que significa o princípio de Kerckoffs?",
                options: [
                "A chave de cifra é a única informação que deve ser mantida em segredo",
                "O algoritmo de cifra é a única informação que deve ser mantida em segredo",
                "A mensagem cifrada é a única informação que deve ser mantida em segredo"
                ],
                correct_option: "A chave de cifra é a única informação que deve ser mantida em segredo"
                },
                {
                question: "As redes feistel são construídas a partir de funções que têm inversa?",
                options: [
                "Sim",
                "Não"
                ],
                correct_option: "Não"
                },
                {
                question: "Quantas rondas são recomendadas para a rede de feistel ser segura?",
                options: [
                "Pelo menos uma ronda",
                "Pelo menos duas rondas",
                "Pelo menos três rondas"
                ],
                correct_option: "Pelo menos três rondas"
                },
                {
                question: "O que faz um agente de confiança?",
                options: [
                "Garante a autenticidade de uma mensagem",
                "Garante a confidencialidade de uma mensagem",
                "Garante a integridade de uma mensagem"
                ],
                correct_option: "Garante a autenticidade de uma mensagem"
                },
                {
                question: "Qual é o modo de operação de cifra que consiste em cifrar continuamente a partir de uma cifra de blocos, usando um contador gerado de forma determinística?",
                options: [
                "CTR",
                "Deterministic CTR",
                "CFM"
                ],
                correct_option: "Deterministic CTR"
                },
                {
                question: "O que significa PRP na rede de feistel?",
                options: [
                "Pseudo Random Permutations",
                "Pseudo Random Functions",
                "Pseudo Random Generators"
                ],
                correct_option: "Pseudo Random Permutations"
                },
                {
                question: "Qual é a função do modo de operação OFB?",
                options: [
                "Garantir a confidencialidade de uma mensagem",
                "Garantir a autenticidade de uma mensagem",
                "Transformar uma cifra simétrica em uma cifra assimétrica"
                ],
                correct_option: "Garantir a confidencialidade de uma mensagem"
                },
                {
                  question: "Quais são as propriedades que um sistema deve ter em termos de segurança, de acordo com a CIA?",
                  options: [
                  "Confidencialidade, Integridade e Anonimato",
                  "Confidencialidade, Integridade e Disponibilidade",
                  "Confidencialidade, Autenticidade e Disponibilidade"
                  ],
                  correct_option: "Confidencialidade, Integridade e Disponibilidade"
                },
                {
                  question: "Qual é a função de um sistema de hash?",
                  options: [
                  "Transformar uma cifra simétrica em uma cifra assimétrica",
                  "Manter a confidencialidade da informação",
                  "Produzir um output de tamanho fixo a partir de um input de qualquer tamanho"
                  ],
                  correct_option: "Produzir um output de tamanho fixo a partir de um input de qualquer tamanho"
                },
                {
                  question: "Qual é a principal característica das funções de hash?",
                  options: [
                  "Serem reversíveis",
                  "Serem unidirecionais (one-way)",
                  "Serem resistentes a colisões"
                  ],
                  correct_option: "Serem unidirecionais (one-way)"
                },
                {
                  question: "Qual é a função do MAC (Message Authentication Code)?",
                  options: [
                  "Garantir a confidencialidade de uma mensagem",
                  "Garantir a integridade de uma mensagem",
                  "Garantir a autenticidade de uma mensagem"
                  ],
                  correct_option: "Garantir a integridade de uma mensagem"
                },
                {
                  question: "Qual é o tamanho do output produzido pela função de hash MD5?",
                  options: [
                  "64 bits",
                  "128 bits",
                  "256 bits"
                  ],
                  correct_option: "128 bits"
                },
                {
                  question: "Quais são as propriedades das funções de hash criptográficas?",
                  options: [
                  "Resistência a colisões e reversibilidade",
                  "Resistência a previsão de uma pré-imagem e reversibilidade",
                  "Resistência a colisões e resistência a previsão de uma pré-imagem"
                  ],
                  correct_option: "Resistência a colisões e resistência a previsão de uma pré-imagem"
                },
                {
                  question: "Qual é o algoritmo recomendado para construir um MAC?",
                  options: [
                  "HMAC",
                  "AES",
                  "RSA"
                  ],
                  correct_option: "HMAC"
                },
                {
                  question: "Qual é o tamanho do output produzido pela função de hash SHA-256?",
                  options: [
                  "128 bits",
                  "256 bits",
                  "512 bits"
                  ],
                  correct_option: "256 bits"
                },
                {
                  question: "Qual é a função do MAC na segurança de uma mensagem?",
                  options: [
                  "Garantir a confidencialidade da mensagem",
                  "Garantir a integridade da mensagem",
                  "Garantir o anonimato do emissor da mensagem"
                  ],
                  correct_option: "Garantir a integridade da mensagem"
                },
                {
                  question: "Qual é o tamanho do output produzido pela função de hash SHA-3?",
                  options: [
                  "160 bits",
                  "256 bits",
                  "512 bits",
                  "Depende da especificação, permite escolher o número de bits"
                  ],
                  correct_option: "Depende da especificação, permite escolher o número de bits"
                  },
                  {
                    question: "Qual é a forma correta de combinar cifragem e código de autenticação em um processo de segurança?",
                    options: [
                    "MAC and Encrypt",
                    "MAC then Encrypt",
                    "Encrypt then MAC"
                    ],
                    correct_option: "Encrypt then MAC"
                                    },
                {
                    question: "A criptografia de chave pública é baseada em qual teoria?",
                    options: [
                    "Teoria dos números",
                    "Teoria dos conjuntos",
                    "Teoria da informação"
                    ],
                    correct_option: "Teoria dos números"
                                    },
                {
                    question: "Qual é um exemplo de problema intratável na criptografia de chave pública?",
                    options: [
                    "Problema do logaritmo discreto",
                    "Problema da multiplicação de matrizes",
                    "Problema da raiz quadrada"
                    ],
                    correct_option: "Problema do logaritmo discreto"
                                    },
                {
                    question: "Em qual problema se baseia a segurança da criptografia de chave pública no algoritmo RSA?",
                    options: [
                    "Problema da fatorização de números compostos",
                    "Problema da soma de números inteiros",
                    "Problema da divisão de números reais"
                    ],
                    correct_option: "Problema da fatorização de números compostos"
                                    },
                {
                    question: "Qual é o melhor algoritmo conhecido para resolver o problema do logaritmo discreto?",
                    options: [
                    "Diffie-Hellman",
                    "ElGamal",
                    "General number field sieve"
                    ],
                    correct_option: "General number field sieve"
                                    },
                {
                    question: "O que é um protocolo de acordos de chaves?",
                    options: [
                    "Um protocolo para estabelecer uma comunicação segura entre duas entidades",
                    "Um protocolo para cifrar mensagens",
                    "Um protocolo para autenticar mensagens"
                    ],
                    correct_option: "Um protocolo para estabelecer uma comunicação segura entre duas entidades"
                                    },
                {
                    question: "Em que tipo de ataque os protocolos de acordos de chaves são mais adequados?",
                    options: [
                    "Ataque de criptoanálise",
                    "Ataque de negação de serviço",
                    "Ataque ao homem no meio passivo"
                    ],
                    correct_option: "Ataque ao homem no meio passivo"
                                    },
                {
                    question: "Qual é a finalidade do protocolo de Diffie-Hellman?",
                    options: [
                    "Criar uma assinatura digital",
                    "Estabelecer uma chave secreta compartilhada",
                    "Criar um canal seguro de comunicação"
                    ],
                    correct_option: "Estabelecer uma chave secreta compartilhada"
                                    },
                {
                    question: "Em um processo de criptografia, qual é a forma correta de combinar cifragem e código de autenticação para garantir a segurança da informação?",
                    options: [
                    "Cifrar a mensagem e então calcular o código de autenticação",
                    "Calcular o código de autenticação e então cifrar a mensagem",
                    "Cifrar a mensagem, calcular o código de autenticação e concatená-lo ao criptograma"
                    ],
                    correct_option: "Cifrar a mensagem, calcular o código de autenticação e concatená-lo ao criptograma"
                                    },
                {
                    question: "Quais são as três possíveis formas de combinar cifragem e código de autenticação na criptografia autenticada?",
                    options: [
                    "MAC and Encrypt, MAC then Encrypt, Encrypt then MAC",
                    "Encrypt and MAC, MAC then Encrypt, Encrypt then MAC",
                    "MAC and Encrypt, MAC then Decrypt, Decrypt then MAC"
                    ],
                    correct_option: "MAC and Encrypt, MAC then Encrypt, Encrypt then MAC"
                    },
                    {
                      question: "Qual é a base das cifras de chave pública?",
                      options: [
                      "Problemas de matemática intratáveis",
                      "Problemas de lógica booleana",
                      "Problemas de criptoanálise"
                      ],
                      correct_option: "Problemas de matemática intratáveis"
                  },
                  {
                      question: "Qual é o algoritmo de chave pública utilizado no RSA?",
                      options: [
                      "Diffie-Hellman",
                      "ElGamal",
                      "RSA"
                      ],
                      correct_option: "RSA"
                  },
                  {
                      question: "O que é necessário para gerar um par de chaves no RSA?",
                      options: [
                      "Dois números primos grandes",
                      "Dois números pares",
                      "Dois números consecutivos"
                      ],
                      correct_option: "Dois números primos grandes"
                  },
                  {
                      question: "Qual é o objetivo do algoritmo de cifragem no RSA?",
                      options: [
                      "Cifrar a mensagem",
                      "Gerar a chave privada",
                      "Gerar o módulo"
                      ],
                      correct_option: "Cifrar a mensagem"
                  },
                  {
                      question: "Como é realizada a decifragem no RSA?",
                      options: [
                      "C = M^D mod Z",
                      "M = C^E mod Z",
                      "M = C^D mod Z"
                      ],
                      correct_option: "M = C^D mod Z"
                  },
                  {
                      question: "Qual é a principal diferença entre o RSA Text Book e o RSA com padding?",
                      options: [
                      "O tamanho das chaves",
                      "A adição de um padding aleatório",
                      "A utilização de números primos diferentes"
                      ],
                      correct_option: "A adição de um padding aleatório"
                  },
                  {
                      question: "Quais são os três algoritmos utilizados em um esquema de assinatura digital com chaves públicas?",
                      options: [
                      "Gerar chaves, gerar assinatura, verificar assinatura",
                      "Cifrar mensagem, decifrar mensagem, gerar chave privada",
                      "Criar hash, gerar chave pública, decifrar mensagem"
                      ],
                      correct_option: "Gerar chaves, gerar assinatura, verificar assinatura"
                  },
                  {
                      question: "Qual é a propriedade que garante que a mensagem foi assinada pelo dono da chave privada?",
                      options: [
                      "Autenticidade",
                      "Integridade dos dados",
                      "Garantia de não repúdio"
                      ],
                      correct_option: "Autenticidade"
                  },
                  {
                      question: "Qual é a propriedade que garante que qualquer alteração na mensagem invalida a assinatura?",
                      options: [
                      "Autenticidade",
                      "Integridade dos dados",
                      "Dificuldade de falsificação"
                      ],
                      correct_option: "Integridade dos dados"
                  },
                  {
                      question: "Qual é a propriedade que garante que o dono da chave privada não pode negar que assinou a mensagem?",
                      options: [
                      "Autenticação da origem de informação",
                      "Dificuldade de falsificação",
                      "Garantia de não repúdio"
                      ],
                      correct_option: "Garantia de não repúdio"
                      },
                      {
                        question: "Qual é o objetivo do algoritmo de geração de chaves no ElGamal?",
                        options: [
                        "Gerar um número primo grande",
                        "Gerar um número aleatório",
                        "Gerar as chaves pública e privada"
                        ],
                        correct_option: "Gerar as chaves pública e privada"
                  },
                  {
                        question: "Quais são os três elementos da chave pública no criptograma ElGamal?",
                        options: [
                        "X, G, P",
                        "Y, G, K",
                        "C, Y, K"
                        ],
                        correct_option: "X, G, P"
                  },
                  {
                        question: "Como é realizado o processo de cifragem no criptograma ElGamal?",
                        options: [
                        "Calcula-se Y = G^A mod P",
                        "Calcula-se K = X^A mod P",
                        "Calcula-se C = (m * K) mod P"
                        ],
                        correct_option: "Calcula-se Y = G^A mod P"
                  },
                  {
                        question: "O que é necessário para realizar o processo de decifragem no criptograma ElGamal?",
                        options: [
                        "O texto cifrado C e o Y",
                        "O número primo P e o gerador G",
                        "O texto-limpo e o número aleatório A"
                        ],
                        correct_option: "O texto cifrado C e o Y"
                  },
                  {
                        question: "Qual é a propriedade do criptograma ElGamal em relação à cifragem da mesma mensagem?",
                        options: [
                        "Produz textos cifrados iguais",
                        "Produz textos cifrados diferentes",
                        "Produz textos cifrados invertidos"
                        ],
                        correct_option: "Produz textos cifrados diferentes"
                  },
                  {
                        question: "O que é um certificado digital?",
                        options: [
                        "Um documento assinado por alguém",
                        "Um código de autenticação",
                        "Um protocolo de criptografia"
                        ],
                        correct_option: "Um documento assinado por alguém"
                  },
                  {
                        question: "Quais são os elementos presentes em um certificado digital?",
                        options: [
                        "Nome para quem é passado, chave pública, assinatura",
                        "Chave privada, algoritmo de assinatura, data de início",
                        "Data de fim, número primo, certificado de confiança"
                        ],
                        correct_option: "Nome para quem é passado, chave pública, assinatura"
                  },
                  {
                        question: "O que assegura a existência de uma lista de certificados digitais de confiança nos sistemas operativos?",
                        options: [
                        "A validade dos certificados",
                        "A autenticidade dos certificados",
                        "A verificação das chaves públicas"
                        ],
                        correct_option: "A verificação das chaves públicas"
                  },
                  {
                        question: "Qual é o objetivo do algoritmo de geração de assinatura em um certificado digital?",
                        options: [
                        "Assinar o documento",
                        "Gerar a chave privada",
                        "Criar um código de autenticação"
                        ],
                        correct_option: "Assinar o documento"
                  },
                  {
                        question: "Qual é a propriedade principal de um certificado digital?",
                        options: [
                        "Garantir a autenticidade da mensagem",
                        "Assegurar a confidencialidade dos dados",
                        "Impedir a falsificação do certificado"
                        ],
                        correct_option: "Impedir a falsificação do certificado"
                        },
                        {
                          question: "O que é uma Infraestrutura de Chave Pública (PKI)?",
                          options: [
                          "Uma lista de certificados revogados",
                          "Um cartão de cidadão",
                          "Um sistema de emissão e gerenciamento de certificados digitais"
                          ],
                          correct_option: "Um sistema de emissão e gerenciamento de certificados digitais"
                  },
                  {
                          question: "O que é a Raiz de Confiança em uma infraestrutura de chave pública?",
                          options: [
                          "Uma lista de certificados confiáveis",
                          "Uma autoridade de certificação",
                          "Uma cadeia de certificados"
                          ],
                          correct_option: "Uma lista de certificados confiáveis"
                  },
                  {
                          question: "Qual é a função da Lista de Revogação de Certificados?",
                          options: [
                          "Gerenciar os certificados digitais",
                          "Verificar a validade dos certificados",
                          "Registrar os certificados comprometidos"
                          ],
                          correct_option: "Verificar a validade dos certificados"
                  },
                  {
                          question: "O que é o Cartão de Cidadão?",
                          options: [
                          "Um dispositivo de autenticação de dois fatores",
                          "Um certificado digital",
                          "Um sistema operativo com certificados confiáveis"
                          ],
                          correct_option: "Um dispositivo de autenticação de dois fatores"
                  },
                  {
                          question: "Quantos certificados digitais X.509 estão presentes no Cartão de Cidadão?",
                          options: [
                          "Um certificado de autenticação",
                          "Dois certificados de autenticação",
                          "Um certificado de autenticação e um certificado de assinatura"
                          ],
                          correct_option: "Um certificado de autenticação e um certificado de assinatura"
                  },
                  {
                          question: "Como é protegida a chave privada no Cartão de Cidadão?",
                          options: [
                          "Com um PIN",
                          "Com uma senha",
                          "Com uma chave de criptografia"
                          ],
                          correct_option: "Com um PIN"
                  },
                  {
                          question: "Quantos PINs diferentes existem no Cartão de Cidadão?",
                          options: [
                          "4 PINs",
                          "7 PINs",
                          "9 PINs"
                          ],
                          correct_option: "9 PINs"
                  },
                  {
                          question: "Qual é o PIN necessário para autorizar a indicação da morada no Cartão de Cidadão?",
                          options: [
                          "PIN de autenticação",
                          "PIN de assinatura",
                          "PIN da morada"
                          ],
                          correct_option: "PIN da morada"
                  },
                  {
                          question: "Qual é o PIN necessário para autenticação do titular no Cartão de Cidadão?",
                          options: [
                          "PIN de autenticação",
                          "PIN de assinatura",
                          "PIN de cancelamento do smartcard"
                          ],
                          correct_option: "PIN de autenticação"
                  },
                  {
                          question: "Quantos PINs são necessários para produzir assinaturas digitais com o Cartão de Cidadão?",
                          options: [
                          "1 PIN",
                          "2 PINs",
                          "3 PINs"
                          ],
                          correct_option: "2 PINs"
                          }
      ]

  export default SI;