import React from 'react';
import BaseForm from '../../BaseForm/Index';
import './styles.scss';

const Form = () => {
    return (
        <BaseForm title="cadastro um produto">
            <div className="row">
                <div className="col-5">
                    <input type="text" className="form-control"/>
                </div>
            </div>
        </BaseForm>
    );
}

export default Form;