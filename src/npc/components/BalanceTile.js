import React from 'react'

class BalanceTile extends React.Component {
    constructor(props) {
        super();
        this.state = {
            ...this.state,
            ...props,
        };
        this.state = {
            ...this.state,
            balanceString: this._generateBalanceString()
        }
    }

    _generateBalanceString() {
        var balanceString = '';
        var balance = this.state.balance;
        if (balance.center <= balance.max_balance) {
            while (balanceString.length < balance.curr_balance * 2) {
                balanceString += ' ';
            }
            balanceString += 'v\n';
        }
        for (var i = 0; i <= balance.max_balance; i++) {
            if (balance.center > balance.max_balance || i === balance.center) balanceString += 'x';
            else balanceString += 'o';
            balanceString += '-';
        }
        balanceString += '>';
        return balanceString;
    }

    _shiftBalanceDown() {
        let balance = this.state.balance;
        balance.curr_balance = balance.curr_balance === 0 ? 0 : balance.curr_balance - 1
        this.setState({
            ...this.state,
            balance: balance,
            baanceString: this._generateBalanceString()
        });
        this.render();
    }

    _shiftBalanceUp() {
        let balance = this.state.balance;
        if (balance.center > balance.max_balance) return;
        balance.curr_balance++;
        if (balance.curr_balance > balance.max_balance) {
            balance.center++;
            balance.curr_balance = balance.center;
        }
        this.setState({
            ...this.state,
            balance: balance,
            balanceString: this._generateBalanceString()
        });
    }


    render() {
        return (
            <div>
                <h3>Balance</h3>
                <button
                onClick={() => this._shiftBalanceDown()}
                >-</button>
                <div>
                <code style={{whiteSpace: 'pre-wrap'}}>{this.state.balanceString}</code>
                </div>                
                <button
                onClick={() => this._shiftBalanceUp()}
                >+</button>
            </div>
        );
    }
}

export default BalanceTile;