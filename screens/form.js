import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const FormScreen = ({ formBlock }) => {
    let content = formBlock.content;

    return (
        <div className="screen">

            <h2 className="h2">{ formBlock.maintitle }</h2>

            <div className="form_group">

                <p className="p1 cover form">{ content.header }</p>
                <div className="p2 white">{ content.subheader }</div>
            
                <div className="form w-form">

                    <Form id="email-form" name="email-form" data-name="Email Form">

                        <Form.Group className="form_block">

                        { /* Setting Panel */}
                        

                            <Form.Group id="w-node-a24d0f148a67-6f5bc74c" className="form_settings">
                                <input type="text" className="input_text w-node-b023cd8cb4e7-6f5bc74c w-input" maxlength="256" name="adress" data-name="adress" placeholder="Введите адрес" id="adress" required=""/>
                                <a id="w-node-Button 2-6f5bc74c" href="#" className="button w-button">Поиск</a>

                                <div data-hover="" data-delay="0" id="w-node-98099e73c31f-6f5bc74c" className="dropdown w-dropdown">
                                    <div className="dropdown-toggle w-dropdown-toggle">
                                        <div className="icon w-icon-dropdown-toggle"></div>
                                        <div className="text-block">Тип данных</div>
                                    </div>
                                    <nav className="w-dropdown-list">
                                        <a href="#" className="w-dropdown-link">Link 1</a>
                                        <a href="#" className="w-dropdown-link">Link 2</a>
                                        <a href="#" className="w-dropdown-link">Link 3</a>
                                    </nav>
                                </div>
                                <div data-hover="" data-delay="0" id="w-node-9c36b29d77b0-6f5bc74c" className="dropdown w-dropdown">
                                    <div className="dropdown-toggle w-dropdown-toggle">
                                        <div className="icon w-icon-dropdown-toggle"></div>
                                        <div className="text-block">Масштаб</div>
                                    </div>
                                    <nav className="w-dropdown-list">
                                        <a href="#" className="w-dropdown-link">Link 1</a>
                                        <a href="#" className="w-dropdown-link">Link 2</a>
                                        <a href="#" className="w-dropdown-link">Link 3</a>
                                    </nav>
                                </div>
                                <div data-hover="" data-delay="0" id="w-node-005c32959f2b-6f5bc74c" className="dropdown w-dropdown">
                                    <div className="dropdown-toggle w-dropdown-toggle">
                                        <div className="icon w-icon-dropdown-toggle"></div>
                                        <div className="text-block">Формат экспорта</div>
                                    </div>
                                    <nav className="w-dropdown-list">
                                        <a href="#" className="w-dropdown-link">Link 1</a>
                                        <a href="#" className="w-dropdown-link">Link 2</a>
                                        <a href="#" className="w-dropdown-link">Link 3</a>
                                    </nav>
                                </div>

                            </Form.Group>

                        
                        { /* end Setting Panel */}

                        { /* Map Block */}
                        <Form.Group id="w-node-efd2511822c6-6f5bc74c" className="form_map"></Form.Group>
                        { /* end Map Block */}

                        { /* Contact Block */}
                        <Form.Group className="form_contacts">

                            <h1 className="h3 contacts">{ content.contactHeader }</h1>
                            <input type="text" className="input_text contacts w-input" maxlength="256" name="field" data-name="Field" placeholder="Example Text" id="field" required=""/>
                            <input type="text" className="input_text contacts w-input" maxlength="256" name="field-2" data-name="Field 2" placeholder="Example Text" id="field-2" required=""/>
                            
                            <div data-hover="" data-delay="0" className="dropdown-2 w-dropdown">
                                <div className="dropdown-toggle-2 w-dropdown-toggle">
                                    <div className="icon-2 w-icon-dropdown-toggle"></div>
                                    <div className="text-block-2">Сфера деятельности</div>
                                </div>
                                <nav className="w-dropdown-list">
                                    <a href="#" className="w-dropdown-link">Link 1</a>
                                    <a href="#" className="w-dropdown-link">Link 2</a>
                                    <a href="#" className="w-dropdown-link">Link 3</a>
                                </nav>
                            </div>
                            
                            <div className="form_warning">
                            <div className="icon_i"></div>
                            <div className="p4 regwhite">{ content.contactWarning }</div>
                            </div>
                        </Form.Group>
                        { /* end Contact Block */}

                        { /* Sumup Block */}
                        <Form.Group className="form_sumup">
                            <div className="p4">Итоговая стоимость</div>
                            <h1 className="h3 f1">0 ₽</h1>
                            <div className="p4">Площадь участка</div>
                            <h1 className="h3 f1">0 га</h1>
                            <div className="p4">Масштаб</div>
                            <h1 className="h3 f1">1: 50 000</h1>
                            <div className="p4">Формат экспорта</div>
                            <h1 className="h3 f1">GeoJSON</h1>
                        </Form.Group>
                        { /* end Sumup Block */}

                        <div className="p4 regwhite _1">{ content.policyWarning }</div>
                        <a href="#" className="cta cards w-button">Заказать карту</a>

                        </Form.Group>

                    </Form>

                </div>
            
            </div>
        </div>
    )
}

export default FormScreen

