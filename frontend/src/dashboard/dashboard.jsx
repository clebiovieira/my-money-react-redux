import React,{Component} from 'react'
import {connect} from 'react-redux'

// Linkando o componente com a alteração de estado disparado quando as ActionsCreatores
// forem disparadas para evoluir o estado
import {bindActionCreators} from 'redux'
import {getSummary} from './dashboardActions'
//

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from  '../common/layout/row'

class Dashboard extends Component{
    //Função chamada sempre que o componente será renderizado
    componentWillMount(){
        this.props.getSummary()
    }
    
    render(){
        const {credit, debt} = this.props.summary
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0'/>
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={`R$ ${credit}`} text='Total de Créditos'/>
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${debt}`} text='Total de Débitos'/>
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`R$ ${credit - debt}`} text='Valor Consolidado'/>
                    </Row>
                </Content>
            </div>
        )
    }
}

//Esse objeto ensina como o React-Redux vai tirar o dado da Store e onde ele
//vai colocar do estado nas propriedas do componente React.
//Ex... No arquivo Reducer o estado foi configurado como
//dashboard: () => ({summary: {credit:100, devit: 50}})
const mapStateToProps = state => ({summary: state.dashboard.summary})

//>>A cola final entre o componente e o estado<<
//bindActionCreators vai ligar o ActionCreator ao getSummary.
//Quando getSummary for chamado o dispatch enviará para todos os Reducers
//da app. um aviso. Os reducers interessados saberão que houve uma chamada e tratarão como
//for do seu interesse para eveluir seu estado 
const mapDispatchToProps = dispatch => bindActionCreators({getSummary},dispatch)


//Passo o Mapeador Estado-Propriedade e o componente que será decorado com o estado
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)