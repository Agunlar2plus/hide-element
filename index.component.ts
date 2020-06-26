import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  hide: boolean;
  // 'hide' serve para obter o resultado de nossa condicional dentro da função 'hideObject()'

  hideObject() {
    window.onscroll = () => {
    // 'window.onscroll' vai ficar chamando a condicional toda vez que o topo da tela mudar
      if (window.pageYOffset < 400) {
      // 'window.pageYOffset' pega o ponto superior atual da tela
      // '400' é a distancia do topo atual para o ponto 0 do topo da página
        return this.hide = false;
      } else {
        return this.hide = true;
      }
    };
    return this.hide;
    // 'return this.hide;' retorna o valor apresentado pela condicional
  }

}
