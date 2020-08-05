import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/41457777?s=460&u=2f8932ce11d00a64759f0356e15b0351682278bc&v=4" alt="Victor Thury" />
        <div>
          <strong>Victor Thury</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Estudando Frontend since 2019.
            <br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero, dolorem quisquam saepe ipsum deserunt ratione reprehenderit, officiis, facere modi molestias! Repellat fugiat expedita exercitationem! Consectetur unde natus quod molestias?
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;