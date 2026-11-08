import { useState } from 'react'
import { HashRouter, Routes, Route, Link, Router } from 'react-router-dom';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import './App.css'

function Header() {
  return (
    <div className='header' >
      <img src="headerimg1.svg" alt="" />
      <h1>Az egyenáram</h1>
      <img src="headerimg2.svg" alt="" />
    </div>
  );
}

function Nav() {
  return (
    <div className='nav'>
      <Link className='link' to="/">Árramerrőség</Link>
      <Link className='link' to="/feszultseg">Feszültség</Link>
      <Link className='link' to="/teljesitmeny">Teljesímény</Link>
      <Link className='link' to="/aramkorok">Áramkörök</Link>
    </div>
  );
}

function Aramereroseg() {
  return (
    <div className='pageanimation'>
      <h2>Az eletromos áram és áramerősség (I)</h2>
      <h3>Elmélet és alapfogalmak</h3>
      <ul>
        <li><b>Elektromos áram: </b>Töltéshordozók tartós, rendezett mozgása.</li>
        <ul>
          <li>Fémekben: szabad elektronok mozgása.</li>
          <li>Elektrolitokban (pl. sós víz): pozitív és negatív ionok mozgása.</li>
        </ul>
        <li><b>Árramerrőség (I):</b> A vezető keresztmetszetén egységnyi idő alatt áthaladó töltésmennyiség.</li>
        <ul>
          <li><b>Képlet:</b></li>
          <Link to="/iqt"><div className='blockmath'><BlockMath math="I = \frac{Q}{t}" /></div></Link>
          <li><b>Mértékegysége:</b> Amper (A) - SI-alapmértékegység. (1 A = 1 C/s)</li>
        </ul>
        <li><b>Megállapodás szerinti áramirány:</b> A pozití töltések mozgásának iránya (a pozitív pólustó a negatív felé). A fémekben az elektronok tényleges ezzel ellentétesen haladnak.</li>
        <li><b>Driftsebesség:</b> Az elektromos mező ugyan fénysebbeséggel terjed a vezetékben, de maguk az elektronok meglepően lassan vándorolnak (gyakran csak néhány mm/h sebességgel).</li>
      </ul>
    </div>
  );
}

function Iqt() {
  return (
  <div className='pageanimation'>
    <h2>Az áramerősség képlete</h2>
    <div className='blockmath'><BlockMath math='I=\frac{Q}{t}=A=\frac{C}{s}'/></div>
    
  </div>
  );
}

function Feszultseg() {
  return (
    <div className='pageanimation'>
    <h2>Feszültség (U) és Ohm-törvény (R) - Az Ellenállás</h2>
    <h3>Elmélet és Mértékegységek</h3>
    <ul>
      <li><b>Feszültség (U):</b> Az áramforrás „elektronszivattyúként" működik, és potenciálkülönbséget (feszültséget) tart fenn a vezető két vége között Ez hozza mozgásba a töltéseket.</li>
      <ul>
        <li><b>Mértékegysége:</b> Volt (V).</li>
      </ul>
      <li><b>Elektromos ellenállás (R):</b> A vezető anyaga akadályozza az elektronok szabad áramlását (ütköznek a rácsionokkal). Ezt az akadályozó hatást nevezzük ellenállásnak.</li>
      <ul>
        <li><b>Mértékegysége:</b> Ohm (Ω).</li>
      </ul>
      <li>Ohm-törvénye: Egy vezetőn átfolyó áram erősség egyenesen arányos a vezető végein lévő feszültséggel, és forditottan arányos a vezető ellenállásával:</li>
      <div className='blockmath'><BlockMath math='I = \frac{U}{R} ↔️ U = I*R ↔️ R = \frac{U}{I} ' /></div>
    </ul>
    </div>
  );
}

function Teljesitmeny() {
  return (
    <div className='pageanimation'>
      <h2>Elektromos Munkavégzés(W) és Teljesítmény (p) - A Watt és Joule</h2>
      <h3>Elmélet és alapfogalmak és Mértékegységek</h3>
      <ul>
        <li><b>Elektromos munka (W):</b> Az elektromos mező által a töltések mozgatása közben végzett munka.</li>
        <ul>
          <li><b>Képlet:</b></li>
          <div className='blockmath'>W = U * Q = U * I * t</div>
          <li><b>Mértékegysége: Joule (J) vagy kilówattóra (kWh).</b></li>
        </ul>
        <li><b>Elektromos Teljesímény (P): </b>Megmutatja az egységnyi idő alatt evégzett elektromos munkát (milyen gyorsan fogyasztja vagy adja le az energiát az eszköz).</li>
        <ul>
          <li><b>Képlet: </b></li>
          <div className='blockmath'><BlockMath math='P = \frac{W}{t} = U*I'/></div>
          <p>Ohm-törvényével behelyettesítve:</p>
            <div className='blockmath'><BlockMath math='P=I^2*R=\frac{U^2}{R}'/></div>
            <li><b>Mértékegysége:</b> Watt (W). (1. W = 1V * 1 A)</li>
        </ul>
      </ul>
    </div>
  );
}

function Aramkorok() {
  return (
  <div className='pageanimation'>
    <h2>Áramkörök és Kapcsolási Módok</h2>
    <ol>
      <li><b>Soros Kapcsolás</b>
      <ul>
        <li>Az alkatrészek egyetlen ágban, egymás után vannak kötve. Mint a régi karácsony fa égőknél.</li>
        <li><b>áramerősség:</b> Mindenhol ugyenakkora</li>
        <div className='blockmath'><BlockMath math='I = I_1 = I_2'/></div>
        <li><b>Feszültség: </b>Megoszlik az elemek között</li>
        <div className='blockmath'><BlockMath math='U_{\text{összes}} = U_1+U_2'/></div>
        <li><b>Eredő ellenállás:</b> Összeadódik</li>
        <div className='blockmath'><BlockMath math='R_{\text{eredő}} = R_1+R_2'/></div>
      </ul>
      </li>
      <li><b>Párhuzamos Kapcsolás</b>
      <ul>
        <li>Az áramkör elágazik, az alkatrészek külön ágakban vannak (a háztartásokban ezt használjuk!).</li>
        <li><b>Feszültség:</b> Minden ágban ugyanakorra</li>
        <div className='blockmath'><BlockMath math='U=U_1=U_2=230V'/></div>
        <li><b>áramerősség:</b> Az ágak áramai összeadódnak</li>
        <div className='blockmath'><BlockMath math='I_összes=I_1+I_2'/></div>
        <li><b>Eredő ellenállás:</b></li>
        <div className='blockmath'><BlockMath math='\frac{1}{R_{\text{eredő}}}=\frac{1}{R_1}+\frac{1}{R_2}'/></div>
      </ul>
      </li>
    </ol>
  </div>
  );
}


export default function website() {
  return (
  <div className='background'>
  <HashRouter>
 
    <div className='contener'>
    <Header />
    <Nav />
      <Routes>
        <Route path='/' element={<Aramereroseg />} />
        <Route path='feszultseg' element={<Feszultseg />} />
        <Route path='/teljesitmeny' element={<Teljesitmeny />}/>
        <Route path='/aramkorok' element={<Aramkorok />} />
        <Route path='/iqt' element={<Iqt />}/>
      </Routes>
      </div>
  </HashRouter>
  </div>
  );
}

