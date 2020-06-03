import React, { Component } from 'react';

import instagramIcon from '../../assets/img/Desk/Instagram_white-DESK.svg';
import marcaDA from '../../assets/img/Desk/MarcaDA-DESK.svg'
import splash from '../../assets/img/Desk/SpashD-DESK.svg';

import '../../assets/scss/fonts.scss';
import './home-temp.scss';

export class HomeTemp extends Component {
  render() {
    return (
      <section className="home__temp">

        <aside className="splash__area" alt="objeto esférico 2D, com superficie rodeada por várias pontas e um D maiusculo de Design Ativista no centro, imitando a estética de um stencil">
          <img src={splash} alt="objeto esférico 2D, com superficie rodeada por várias pontas e um D maiusculo de Design Ativista no centro, imitando a estética de um stencil" />
        </aside>

        <article className="campaign">

          {/* <div className="campaign__container"> */}

          <h1 className="campaign__title">#DesignAtivista contra a crise do <span>COVID-19</span></h1>
          <p className="campaign__text">
            Criamos um grupo de trabalho que
            diariamente pensa e cria conteúdos que
            tenham a ver com o COVID-19 em um
            contexto de conscientização ou denúncia.
            <br />
            <br />
            Todas as artes e materiais são livres para
            compartilhar. É só baixar e espalhar.
            <br />
            <br />
            <b>Veja o que fizemos para enfrentar a crise do COVID-19:</b>
          </p>


          <a className="drive__btn" href="https://drive.google.com/drive/u/0/folders/1f17bjVoqPZobK9w5hX-4Rr5U0XEE4IYf">
            escolha uma arte aqui
            </a>

          <label className="campaign__link">Aqui seu ativismo de sofá é bem-vindo e pode salvar vidas.
            <a href="https://drive.google.com/drive/u/0/folders/1-1-eyqyOgSboMoNpno12HxhkOnHaVVlG">Salve o arquivo aqui</a>
          </label>

          <footer className="contato-da__footer">
            <img src={marcaDA} className="marcada__img" />
            <a className="insta__link" ><img src={instagramIcon} /> </a>
          </footer>
          {/* </div> */}
        </article>
      </section>

    )
  }
};

export default HomeTemp;