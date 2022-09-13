import React from 'react';
import { render } from 'react-dom';
import Producto from './src/components/Product.jsx';
import './src/global.gcss';
import Nombre from './src/components/nombre.jsx'

render(
<>
<Producto title="Prueba" price={400}/><Nombre name="Marlon" age= "18"/>
</>,
 document.getElementById('app'));
