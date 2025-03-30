import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacidadePage() {
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
              Política de Privacidade
            </h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-100">Última atualização: 23 de março de 2024</p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Introdução</h2>
              <p className="text-gray-100 mb-4">
                Esta Política de Privacidade descreve como Celso Ladislau Junior coleta, usa e compartilha informações
                pessoais quando você utiliza nossos serviços, visita nosso site ou interage conosco de qualquer forma.
              </p>
              <p className="text-gray-100 mb-4">
                Respeitamos sua privacidade e estamos comprometidos em proteger suas informações pessoais. Por favor,
                leia esta política cuidadosamente para entender nossas práticas.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Informações que Coletamos</h2>
              <p className="text-gray-100 mb-4">Podemos coletar os seguintes tipos de informações:</p>
              <h3 className="text-lg font-semibold text-white mt-4 mb-2">2.1. Informações fornecidas por você</h3>
              <ul className="list-disc pl-6 text-gray-100 mb-4">
                <li>Informações de contato (nome, e-mail, telefone, endereço)</li>
                <li>Informações de perfil profissional</li>
                <li>Detalhes do projeto e requisitos</li>
                <li>Comunicações que você envia para nós</li>
                <li>Informações de pagamento (processadas por serviços de pagamento seguros)</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-4 mb-2">2.2. Informações coletadas automaticamente</h3>
              <ul className="list-disc pl-6 text-gray-100 mb-4">
                <li>Dados de uso do site (páginas visitadas, tempo de permanência)</li>
                <li>Informações do dispositivo (tipo de navegador, sistema operacional)</li>
                <li>Endereço IP e localização aproximada</li>
                <li>Cookies e tecnologias similares</li>
              </ul>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Como Usamos Suas Informações</h2>
              <p className="text-gray-100 mb-4">Utilizamos as informações coletadas para:</p>
              <ul className="list-disc pl-6 text-gray-100 mb-4">
                <li>Fornecer, manter e melhorar nossos serviços</li>
                <li>Processar e completar transações</li>
                <li>Comunicar-nos com você sobre projetos, serviços e atualizações</li>
                <li>Responder a suas solicitações e fornecer suporte</li>
                <li>Personalizar sua experiência</li>
                <li>Analisar tendências e melhorar nosso site</li>
                <li>Proteger nossos direitos, propriedade ou segurança</li>
              </ul>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Compartilhamento de Informações</h2>
              <p className="text-gray-100 mb-4">Podemos compartilhar suas informações nas seguintes circunstâncias:</p>
              <ul className="list-disc pl-6 text-gray-100 mb-4">
                <li>Com prestadores de serviços que nos auxiliam (hospedagem, processamento de pagamentos)</li>
                <li>Para cumprir obrigações legais</li>
                <li>Para proteger direitos e segurança</li>
                <li>Em conexão com uma fusão, venda ou aquisição de negócios (com aviso prévio)</li>
                <li>Com seu consentimento ou a seu pedido</li>
              </ul>
              <p className="text-gray-100 mb-4">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing
                sem seu consentimento explícito.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Cookies e Tecnologias Similares</h2>
              <p className="text-gray-100 mb-4">
                Nosso site utiliza cookies e tecnologias similares para melhorar sua experiência, analisar o tráfego e
                personalizar o conteúdo. Você pode controlar o uso de cookies através das configurações do seu
                navegador.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">6. Segurança de Dados</h2>
              <p className="text-gray-100 mb-4">
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra
                acesso não autorizado, perda ou alteração. No entanto, nenhum método de transmissão pela internet ou
                armazenamento eletrônico é 100% seguro.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">7. Retenção de Dados</h2>
              <p className="text-gray-100 mb-4">
                Mantemos suas informações pessoais pelo tempo necessário para cumprir os propósitos descritos nesta
                política, a menos que um período de retenção mais longo seja exigido por lei.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">8. Seus Direitos</h2>
              <p className="text-gray-100 mb-4">
                Dependendo da sua localização, você pode ter os seguintes direitos em relação às suas informações
                pessoais:
              </p>
              <ul className="list-disc pl-6 text-gray-100 mb-4">
                <li>Acessar e receber uma cópia de suas informações</li>
                <li>Retificar informações incorretas</li>
                <li>Solicitar a exclusão de suas informações</li>
                <li>Restringir ou opor-se ao processamento de suas informações</li>
                <li>Portabilidade de dados</li>
                <li>Retirar consentimento a qualquer momento</li>
              </ul>
              <p className="text-gray-100 mb-4">
                Para exercer esses direitos, entre em contato conosco através dos canais indicados na seção "Contato".
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">9. Privacidade de Crianças</h2>
              <p className="text-gray-100 mb-4">
                Nossos serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente informações
                pessoais de crianças. Se você acredita que coletamos informações de uma criança, entre em contato
                conosco imediatamente.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">10. Links para Sites de Terceiros</h2>
              <p className="text-gray-100 mb-4">
                Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelas práticas de
                privacidade desses sites. Recomendamos que você leia as políticas de privacidade de qualquer site que
                visitar.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">11. Alterações nesta Política</h2>
              <p className="text-gray-100 mb-4">
                Podemos atualizar esta política periodicamente. A versão mais recente estará sempre disponível neste
                site, com a data da última atualização. Recomendamos que você revise esta política regularmente.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">12. Contato</h2>
              <p className="text-gray-100 mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer seus direitos, entre em
                contato através do WhatsApp (27) 99266-5692 ou por e-mail.
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

