- Uso de Rótulos e Associação:
  No Radio Button sem práticas de acessibilidade, os rótulos não são associados corretamente aos inputs usando o atributo for ou htmlFor. Já no Radio Button acessível, os rótulos são associados aos inputs usando o htmlFor, melhorando a acessibilidade e a usabilidade.

- Semântica Adequada:
  O Radio Button sem acessibilidade não utiliza atributos como role="radiogroup" e role="radio", o que dificulta a compreensão do grupo de radio button por tecnologias assistivas. No Radio Button acessível, esses atributos são utilizados para descrever corretamente a estrutura do grupo de radio button.

- Estado Acessível:
  O Radio Button sem acessibilidade não utiliza o atributo aria-checked para descrever o estado selecionado do input. No Radio Button acessível, o aria-checked é utilizado para descrever corretamente o estado selecionado do input, facilitando a compreensão para usuários de tecnologias assistivas.

---

- Sobre testes
  Verificando a presença do modal: O teste "should open the modal when the open button is clicked" verifica se o modal é aberto corretamente quando o botão é clicado. Isso é importante para garantir que usuários que dependem de modais para interação possam acessá-lo corretamente.

Foco no modal: O teste "should focus the modal when opened" verifica se o foco é movido corretamente para o modal quando ele é aberto. Isso é fundamental para usuários que navegam por meio do teclado, pois eles esperam que o foco seja movido para o conteúdo relevante.

Fechamento do modal: Os testes "should close the modal when the close button is clicked" e "should close the modal when the Escape key is pressed" verificam se o modal pode ser fechado de maneira adequada, tanto clicando em um botão quanto pressionando a tecla Escape. Isso é importante para garantir que os usuários possam fechar o modal e retornar ao conteúdo principal da página.

Atributos ARIA: Os testes "should have aria-modal attribute set to true" e "should have aria-labelledby attribute pointing to the modal title" verificam se os atributos ARIA estão configurados corretamente no modal. Esses atributos são importantes para usuários de tecnologias assistivas, pois fornecem informações adicionais sobre a estrutura e o conteúdo do modal.
