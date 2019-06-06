import React from 'react';
import Button from './Button';

const Numpad = ({ onChange }) => (
    <div className="numpad">
        <Button value="1" onClick={onChange}/>
        <Button value="2" onClick={onChange}/>
        <Button value="3" onClick={onChange}/>

        <Button value="4" onClick={onChange}/>
        <Button value="5" onClick={onChange}/>
        <Button value="6" onClick={onChange}/>

        <Button value="7" onClick={onChange}/>
        <Button value="8" onClick={onChange}/>
        <Button value="9" onClick={onChange}/>

        <Button value="," onClick={onChange}/>
        <Button value="0" onClick={onChange}/>
        <Button value="clear" onClick={onChange}><i className="material-icons">backspace</i></Button>
    </div>
);

export default Numpad;
