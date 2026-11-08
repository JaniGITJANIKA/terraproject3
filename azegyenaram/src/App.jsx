import { use, useState } from 'react'
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
      <Link className='link' to="/koszonom">:)</Link>
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

function Iqt({ q, setq, time, settime }) {
  const szamitottAmper = (q && Number(time) !== 0) 
    ? (Number(q) / Number(time)).toFixed(2) 
    : '...';
  return (
  <div className='pageanimation'>
    <h2>Az áramerősség képlete</h2>
    <div className='blockmath'><BlockMath math='I=\frac{Q}{t}=A=\frac{C}{s}'/></div>
    <br />
<div className='blockmath'>
<BlockMath math={`I = \\frac{${q || 'Q'}}{${time || 't'}} = ${szamitottAmper} \\text{ A}`} /></div>
  <input 
    type="number" 
    placeholder='Columb'
    value={q}
    onChange={(e) => setq(e.target.value)}
    />
    <input 
    type="number" 
    placeholder='másodperc'
    value={time}
    onChange={(e) => settime(e.target.value)}
    />
  </div>
  );
}

function Testmath({amper, setamper, watt, setwatt}) {
  const osszeg = Number(amper) + Number(watt);
  return (
  <div className='pageanimation'>

    <h2>Elso ilyen matematikai kódom.</h2>
    <p>{amper}</p>
    <input 
    type="number" 
    value={amper}
    onChange={(e) => setamper(e.target.value)}
    />
    <input 
    type="number" 
    value={watt}
    onChange={(e) => setwatt(e.target.value)}
    />
    <p>{osszeg}</p>
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
      <Link to='/iur'><div className='blockmath'><BlockMath math='I = \frac{U}{R} ↔️ U = I*R ↔️ R = \frac{U}{I} ' /></div></Link>
    </ul>
    </div>
  );
}
function Iur({ volt, setvolt, ohm, setohm, amper, setamper }) {
  // 1. Amper kiszámolása (I = U / R)
  const szamitottAmper = (volt && ohm && Number(ohm) !== 0) 
    ? (Number(volt) / Number(ohm)).toFixed(2) 
    : '...';

  // 2. Ellenállás (Ohm) kiszámolása (R = U / I)
  const szamitottOhm = (volt && amper && Number(amper) !== 0) 
    ? (Number(volt) / Number(amper)).toFixed(2) 
    : '...';

    const szamitottVolt = (amper && ohm && Number(ohm) !== 0) 
    ? (Number(amper) ** Number(ohm)).toFixed(2) 
    : '...';  
  return (
    <div className='pageanimation'>
      <h2>Ohm-törvény számítások</h2>
      <div className='blockmath'>
        <BlockMath math='I = \frac{U}{R} \leftrightarrow U = I \cdot R \leftrightarrow R = \frac{U}{I}' />
      </div>
      
      <h3>Áramerősség (I) kiszámolása</h3>
      <div className='blockmath'>
        <BlockMath math={`I = \\frac{${volt || 'U'}}{${ohm || 'R'}} = ${szamitottAmper} \\text{ A}`} />
      </div>
      <input 
        type="number" 
        placeholder='Volt (U)'
        value={volt}
        onChange={(e) => setvolt(e.target.value)}
      />
      <input 
        type="number" 
        placeholder='Ohm (R)'
        value={ohm}
        onChange={(e) => setohm(e.target.value)}
      />
      <h3>Feszültség (U) kiszámolása</h3>
      <div className='blockmath'>
        <BlockMath math={`U = I \\cdot R \\leftrightarrow ${amper || 'A'} \\cdot ${ohm || 'Ω'} = ${szamitottVolt} \\text{ V}`} />
      </div>
      <input type="number" 
      placeholder='Amper (I)'
      value={amper}
      onChange={(e) => setamper(e.target.value)}
      />
      <input type="number" 
      placeholder='Ohm (R)'
      value={ohm}
      onChange={(e) => setohm(e.target.value)}
      />
      <br/>
      <h3>Ellenállás (R) kiszámolása</h3>
      <div className='blockmath'>
        <BlockMath math={`R = \\frac{${volt || 'U'}}{${amper || 'I'}} = ${szamitottOhm} \\text{ \\Omega}`} />
      </div>
      <input 
        type="number" 
        placeholder='Volt (U)'
        value={volt}
        onChange={(e) => setvolt(e.target.value)}
      />
      <input 
        type="number" 
        placeholder='Amper (I)'
        value={amper}
        onChange={(e) => setamper(e.target.value)}
      />
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
          <Link to='/wuq'><div className='blockmath'>W = U * Q = U * I * t</div></Link>
          <li><b>Mértékegysége: Joule (J) vagy kilówattóra (kWh).</b></li>
        </ul>
        <li><b>Elektromos Teljesímény (P): </b>Megmutatja az egységnyi idő alatt evégzett elektromos munkát (milyen gyorsan fogyasztja vagy adja le az energiát az eszköz).</li>
        <ul>
          <li><b>Képlet: </b></li>
          <Link to='/wuq'><div className='blockmath'><BlockMath math='P = \frac{W}{t} = U*I'/></div></Link>
          <p>Ohm-törvényével behelyettesítve:</p>
            <Link to='/wuq'><div className='blockmath'><BlockMath math='P=I^2*R=\frac{U^2}{R}'/></div></Link>
            <li><b>Mértékegysége:</b> Watt (W). (1. W = 1V * 1 A)</li>
        </ul>
      </ul>
    </div>
  );
}

function Wuq({watt, setwatt, volt, setvolt, q, setq, amper, setamper, time, settime, joule, setjoule, ohm, setohm}) {
    const szamitottj = (volt && amper && Number(time) !== 0) 
    ? (Number(volt) * Number(amper) * Number(time)).toFixed(2) 
    : '...';  
    const szamitottWatt = (joule && Number(time) !== 0) 
    ? (Number(joule) / Number(time)).toFixed(2) 
    : '...';  
    const szamitottWatt2 = (amper && Number(ohm) !== 0) 
    ? (Number(amper)**2 * Number(ohm)).toFixed(2) 
    : '...';
    const szamitottWatt3 = (volt && ohm) 
    ? (Number(volt) ** 2 / Number(ohm)).toFixed(2) 
    : '...';
  return (
    <div className='pageanimation'>
      <h2>Elektromos munka (W)</h2>
      <div className='blockmath'>W = U * Q = U * I * t</div>
      <h2>Columb</h2>
      <div className='blockmath'>Q = I * t</div>
      <br />
        <div className='blockmath'> <BlockMath math={`W = U \\cdot I \\cdot t = ${volt || 'V'} \\cdot ${amper || 'A'} \\cdot ${time || 's'} = ${szamitottj} \\text{J}`} /></div>
      <input 
      type="number" 
      placeholder='Volt (V)'
      value={volt}
      onChange={(e) => setvolt(e.target.value)}
      />
      <input
      type="number" 
      placeholder='Amper (A)'
      value={amper}     
      onChange={(e) => setamper(e.target.value)}
      />
      <input
        type="number" 
        placeholder='Másodperc'
        value={time}
        onChange={(e) => settime(e.target.value)}
       />
       <h2>Elektromos Teljesítmény (P)</h2>
          <div className='blockmath'><BlockMath math='P = \frac{W}{t} = U*I'/></div>
          <br />
          <div className='blockmath'><BlockMath math='W = \frac{J}{s} = V*A'/></div>
          <br />
          <div className='blockmath'><BlockMath math={`\\frac{${joule || 'J'}}{${time || 's'}} = ${szamitottWatt} \\text{W}`} /></div>
          <input 
          type="number" 
          placeholder='Joule (J)'
          value={joule}
          onChange={(e) => setjoule(e.target.value)}
          />
          <input 
          type="number" 
          placeholder='Másodperc'
          value={time}
          onChange={(e) => settime(e.target.value)}
          />
          {/*<div className='blockmath'><BlockMath math={`P = ${amper || 'I'}^2 \\cdot  ${ohm ||"R"} = \\frac{${volt || 'U^2'}}{${ohm || 'R'}} = ${szamitottWatt} \\text{W}`} /></div>*/}
          <div className='blockmath'><BlockMath math='P=I^2*R=\frac{U^2}{R} = W \leftrightarrow P = A^2 \cdot Ω = \frac{V^2}{Ω} = W'/></div>
          <br />
          <div className='blockmath'><BlockMath math={`P = ${amper || 'A'}^2 \\cdot  ${ohm ||"Ω"} = ${szamitottWatt2} \\text{W}`} /></div>
          <input 
          type="number" 
          placeholder='Amper (A)'
          value={amper}
          onChange={(e) => setamper(e.target.value)}
          />
          <input 
          type="number" 
          placeholder='Ohm (Ω)'
          value={ohm}
          onChange={(e) => setohm(e.target.value)}
          />
          <br />
         <div className='blockmath'><BlockMath math={`P = \\frac{${volt || 'V^2'}}{${ohm || 'Ω'}} = ${szamitottWatt3} \\text{W}`} /></div>
          <input 
          type="number" 
          placeholder='Volt (V)'
          value={volt}
          onChange={(e) => setvolt(e.target.value)}
          />
          <input 
          type="number" 
          placeholder='Ohm (Ω)'
          value={ohm}
          onChange={(e) => setohm(e.target.value)}
          />
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
        <Link to='/Iii'><div className='blockmath'><BlockMath math='I = I_1 = I_2'/></div></Link>
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
        <div className='blockmath'><BlockMath math='U=U_1=U_2=V'/></div>
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

function Iii({amper, setamper, volt, setvolt}) {
  return (
    <div className='pageanimation'>
      <h2>Mukszik</h2>
      <div className='blockmath'><BlockMath math='I = I_1 = I_2 = A = A_1 = A_2'/></div>
      <br />
      <div className='blockmath'><BlockMath math={`${amper || 'A_1'} =  ${amper || 'A_2'} = ${amper || 'A'}`}/></div>
      <input 
      type="number" 
      placeholder='Amper (A)'
      value={amper}
      onChange={(e) => setamper(e.target.value)}
      />
      <h2>Azért ennyi mert ketto volt lett volna meg ohm is és erre nem terveztem és feleslegesnek találtam bele rakni.</h2>
    </div>
  );
  
}

function Koszonom() {
  return (
    <div className='pageanimation'>
      <h1>Köszönöm szépen a figyelmet és hogy megnézte a React kódban készített webolamat.</h1>
    </div>
  );
}

export default function website() {
  const [amper, setamper] = useState('');
  const [watt, setwatt] = useState('');
  const [q, setq] = useState('');
  const [time, settime] = useState('');
  const [volt, setvolt] = useState('');
  const [ohm, setohm] = useState('');
  const [joule, setjoule] = useState('');
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
        <Route path='/iqt' element={<Iqt q={q} setq={setq} time={time} settime={settime} />}/>
        <Route path='/testmath' element={<Testmath amper={amper} setamper={setamper} watt={watt} setwatt={setwatt}/>}/>
        <Route path='/iur' element={<Iur volt={volt} setvolt={setvolt} ohm={ohm} setohm={setohm} amper={amper} setamper={setamper}/>}/>
        <Route path='/wuq' element={<Wuq watt={watt} setwatt={setwatt} volt={volt} setvolt={setvolt} q={q} setq={setq} amper={amper} setamper={setamper} time={time} settime={settime} joule={joule} setjoule={setjoule} ohm={ohm} setohm={setohm}/>}/>  
        <Route path='/Iii' element={<Iii amper={amper} setamper={setamper} volt={volt} setvolt={setvolt}/>}/>
        <Route path='/koszonom' element={<Koszonom />}></Route>
      </Routes>
      </div>
  </HashRouter>
  </div>
  );
}

