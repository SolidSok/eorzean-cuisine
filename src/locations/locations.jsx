import Limsa from './cities/limsa/limsa';
import Gridania from './cities/gridania/gridania';
import './locations.css';
import Uldah from './uldah/uldah';
import Ishgard from './cities/ishgard/ishgard';
import Kugane from './cities/kugane/kugane';
import Crystarium from './cities/crystarium/crystarium';
import Sharlayan from './sharlayan/sharlayan';
export default function Locations() {
  return (
    <div className="locations">
      <h1 className="title">Locations</h1>
      <div className="content">
        {' '}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id corporis
        inventore minus autem, repellat eos nulla quis debitis? Modi asperiores
        consectetur voluptates, ullam ut dolorum fuga labore sapiente assumenda
        tenetur.
      </div>
      <Limsa />
      <Gridania />
      <Uldah />
      <Ishgard />
      <Kugane />
      <Crystarium />
      <Sharlayan />
    </div>
  );
}
