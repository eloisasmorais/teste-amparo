import React from 'react';
import OptionsList from './OptionsList';
import PackagesList from './PackagesList';
import UserInput from './UserInput';
import '../Styles/simulation.css'


class Simulation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            originSelected: '',
            destinationSelected: '',
            packageSelected: '',
            toggle: false,
            styles: 'no-selection',
            price: '',
            priceWithoutProd: '',
            selected: this.props.selected
        }
    }
    
    onUserInput = (event) => {
        this.setState({ input: event.target.value });
    }

    selectOrigin = (choice) => {
        this.setState({ originSelected: choice });
    }

    selectDestination = (choice) => {
        this.setState({ destinationSelected: choice,  });
    }

    selectPackage = (choice) => {
        this.setState({ packageSelected: choice });
    }

    selectOption = (id, key) => {
        this.setState(prevState => ({
            selected: !prevState.selected
        }))

    }
    calculatePrice = () => {
        const { originSelected, destinationSelected, packageSelected, input } = this.state;

        let fee = 0, finalPrice = 0, difference = 0, originalPrice = 0;
        if (originSelected === '011' && destinationSelected === '016') {
            fee = 1.90;
        } else if (originSelected === '011' && destinationSelected === '017') {
            fee = 1.70;
        } else  if (originSelected === '011' && destinationSelected === '018') {
            fee = 0.90;
        } else if (originSelected === '016' && destinationSelected === '011') {
            fee = 2.90;
        } else if (originSelected === '017' && destinationSelected === '011') {
            fee = 2.70;
        } else if (originSelected === '018' && destinationSelected === '011') {
            fee = 1.90;
        } else {
            this.setState({ price: 'Opção não disponível' })
            console.log("preço: ", this.state.price);
        }

        originalPrice = input * fee;
        if (input <= packageSelected) {
            this.setState({ price: 0.00 });
        } else {
            difference = input - packageSelected;
        }
        finalPrice = (difference * fee) * 1.1;

        console.log("final: ", finalPrice);
        this.setState({ price: finalPrice.toFixed(2), priceWithoutProd: originalPrice.toFixed(2)})    
    }

    resetPage = () => {
        this.setState({price: '', priceWithoutProd: ''});
    }

    render() {
        return(
            <div className="container">
                <h1 className="title">Simule seu plano!</h1>
                { this.state.price === '' && this.state.priceWithoutProd === '' ?
                (<section className="simulation">
                    <div className="simulation-titles">
                    <h3 className="table-title">Origem</h3>
                    <h3 className="table-title">Destino</h3>
                    <h3 className="table-title">Planos</h3>
                    </div>
                    <div className="simulation-options">
                        <div className="simulation-column">
                            <OptionsList 
                                options={this.props.options} 
                                selectItem={this.selectOrigin}
                            />
                        </div>
                        <div className="simulation-column">
                            <OptionsList
                                options={this.props.options}
                                selectItem={this.selectDestination}
                            />
                        </div>
                        <PackagesList 
                            packages={this.props.packages}
                            selectItem={this.selectPackage}
                            />
                        <div className="user-input">
                            <p className="input-text">Tempo de ligação em minutos: </p>
                            <UserInput onInput={this.onUserInput}/>
                        </div>
                        <h2 className="button" onClick={this.calculatePrice}>Conferir preço</h2>
                    </div>
                </section>)
                    :
                        // this.state.price !== '' && this.state.priceWithoutProd !== '' ? 
                        ( <section className="simulation">
                            <h2 className="price-title">Preço Final</h2>
                            <div className="final-price">
                                <div className="results">
                                    <p className="p-text"><span className="p1">Com FaleMais</span>: R${this.state.price}</p>
                                    <p className="p-text">Sem FaleMais: R${this.state.priceWithoutProd}</p>
                                </div>

                                <h2 className="button" onClick={this.resetPage}>Nova Consulta</h2> 
                            </div>
                        </section>)
            }
            </div>
        )
    }
}

export default Simulation;