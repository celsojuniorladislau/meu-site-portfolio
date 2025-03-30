import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermosPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-br from-purple-600 via-blue-500 to-purple-600">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white/10 backdrop-blur-sm">
        <Link className="flex items-center justify-center" href="/">
          <span className="sr-only">Celso Ladislau Junior</span>
          <span className="font-bold text-lg text-white">CLJ</span>
        </Link>
      </header>
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 md:p-10 shadow-xl">
            <div className="mb-6 flex items-center">
              <Link href="/" className="text-white hover:text-blue-200 flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para a página inicial
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-8">
              Termos de Serviço
            </h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-100">Última atualização: 23 de março de 2024</p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Introdução</h2>
              <p className="text-gray-100 mb-4">
                Bem-vindo aos Termos de Serviço de Celso Ladislau Junior. Estes termos regem o uso dos serviços
                oferecidos por Celso Ladislau Junior, incluindo desenvolvimento de software, automação, chatbots,
                sistemas desktop e web, e outros serviços relacionados.
              </p>
              <p className="text-gray-100 mb-4">
                Ao contratar ou utilizar nossos serviços, você concorda com estes termos. Por favor, leia-os
                cuidadosamente.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Descrição dos Serviços</h2>
              <p className="text-gray-100 mb-4">
                Oferecemos serviços de desenvolvimento de software, incluindo mas não limitado a:
              </p>
              <ul className="list-disc pl-6 text-gray-100 mb-4">
                <li>Desenvolvimento de chatbots com inteligência artificial</li>
                <li>Automação de processos</li>
                <li>Integração de sistemas</li>
                <li>Desenvolvimento de sistemas desktop</li>
                <li>Desenvolvimento de sistemas web</li>
                <li>Criação de sites e landing pages</li>
              </ul>
              <p className="text-gray-100 mb-4">
                Os detalhes específicos de cada serviço serão acordados por escrito antes do início do projeto.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Processo de Contratação</h2>
              <p className="text-gray-100 mb-4">A contratação de nossos serviços segue o seguinte processo:</p>
              <ol className="list-decimal pl-6 text-gray-100 mb-4">
                <li>Consulta inicial para entender as necessidades do cliente</li>
                <li>Elaboração e apresentação de proposta detalhada</li>
                <li>Aprovação da proposta pelo cliente</li>
                <li>Assinatura de contrato específico (quando aplicável)</li>
                <li>Pagamento inicial conforme acordado</li>
                <li>Execução do projeto</li>
                <li>Entrega e aprovação final</li>
              </ol>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Pagamentos</h2>
              <p className="text-gray-100 mb-4">
                Os valores, métodos de pagamento e cronograma serão especificados na proposta e/ou contrato de cada
                projeto. Geralmente, trabalhamos com um modelo de pagamento que inclui:
              </p>
              <ul className="list-disc pl-6 text-gray-100 mb-4">
                <li>Pagamento inicial (entrada) antes do início do projeto</li>
                <li>Pagamentos intermediários baseados em marcos do projeto (para projetos maiores)</li>
                <li>Pagamento final na entrega do projeto</li>
              </ul>
              <p className="text-gray-100 mb-4">
                Atrasos nos pagamentos podem resultar na suspensão dos serviços até a regularização.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Prazos e Entregas</h2>
              <p className="text-gray-100 mb-4">
                Os prazos de entrega serão estabelecidos na proposta de cada projeto. Esforçamo-nos para cumprir todos
                os prazos acordados, mas alguns fatores podem afetar o cronograma:
              </p>
              <ul className="list-disc pl-6 text-gray-100 mb-4">
                <li>Atrasos na aprovação ou feedback do cliente</li>
                <li>Mudanças no escopo do projeto</li>
                <li>Problemas técnicos imprevistos</li>
                <li>Eventos de força maior</li>
              </ul>
              <p className="text-gray-100 mb-4">
                Qualquer alteração significativa no prazo será comunicada ao cliente o mais rápido possível.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">6. Alterações e Revisões</h2>
              <p className="text-gray-100 mb-4">
                Pequenas revisões estão incluídas no escopo do projeto. Alterações significativas ou que mudem
                substancialmente o escopo original podem resultar em custos adicionais e extensão de prazos, que serão
                discutidos e aprovados antes da implementação.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">7. Propriedade Intelectual</h2>
              <p className="text-gray-100 mb-4">
                Após o pagamento integral do projeto, o cliente recebe os direitos de uso do produto final desenvolvido.
                Reservamo-nos o direito de:
              </p>
              <ul className="list-disc pl-6 text-gray-100 mb-4">
                <li>Utilizar o projeto em nosso portfólio</li>
                <li>Reutilizar componentes genéricos e não específicos do cliente em outros projetos</li>
                <li>Manter a propriedade intelectual de ferramentas, bibliotecas e frameworks desenvolvidos por nós</li>
              </ul>
              <p className="text-gray-100 mb-4">
                Códigos-fonte e outros materiais técnicos serão entregues conforme especificado no contrato de cada
                projeto.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">8. Confidencialidade</h2>
              <p className="text-gray-100 mb-4">
                Comprometemo-nos a manter confidenciais todas as informações do cliente às quais tivermos acesso durante
                o desenvolvimento do projeto. Não divulgaremos informações sensíveis a terceiros sem autorização prévia.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">9. Suporte e Manutenção</h2>
              <p className="text-gray-100 mb-4">Após a entrega do projeto, oferecemos:</p>
              <ul className="list-disc pl-6 text-gray-100 mb-4">
                <li>Período de garantia para correção de bugs (geralmente 30 dias)</li>
                <li>Suporte técnico conforme especificado no contrato</li>
                <li>Serviços de manutenção contínua mediante contratação específica</li>
              </ul>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">10. Cancelamento</h2>
              <p className="text-gray-100 mb-4">Em caso de cancelamento do projeto:</p>
              <ul className="list-disc pl-6 text-gray-100 mb-4">
                <li>
                  Pelo cliente: pagamentos já efetuados não serão reembolsados e será cobrado pelo trabalho já realizado
                </li>
                <li>Por nós: o cliente receberá reembolso proporcional ao trabalho não realizado</li>
              </ul>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">11. Limitação de Responsabilidade</h2>
              <p className="text-gray-100 mb-4">Não nos responsabilizamos por:</p>
              <ul className="list-disc pl-6 text-gray-100 mb-4">
                <li>Danos indiretos, incidentais ou consequenciais</li>
                <li>Perda de dados ou interrupções de negócios</li>
                <li>Problemas causados por modificações feitas por terceiros</li>
                <li>Uso indevido dos sistemas desenvolvidos</li>
              </ul>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">12. Alterações nos Termos</h2>
              <p className="text-gray-100 mb-4">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor
                após a publicação neste site. Para projetos em andamento, os termos vigentes no momento da contratação
                permanecerão válidos.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">13. Contato</h2>
              <p className="text-gray-100 mb-4">
                Para dúvidas sobre estes termos, entre em contato através do WhatsApp (27) 99266-5692 ou por e-mail.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-white/10 bg-white/10 backdrop-blur-sm">
        <p className="text-xs text-gray-300">© 2024 Celso Ladislau Junior. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-gray-300 hover:underline underline-offset-4" href="/termos">
            Termos de Serviço
          </Link>
          <Link className="text-xs text-gray-300 hover:underline underline-offset-4" href="/privacidade">
            Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  )
}

