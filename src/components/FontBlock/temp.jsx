class  extends Component {
    state = {  }
    render() { 
        return ( <FontBlockComponent
            key={idx}
            primaryText={fontblock.primaryText}
            secondaryText={this.secondaryText}
            handlePrimaryFontblockNameChange={
                this.handlePrimaryFontblockNameChange
            }
            handleSecondaryFontblockNameChange={
                this.handleSecondaryFontblockNameChange
            }
            length={this.length}
            handleRemoveFontblock={this.handleRemoveFontblock}
        /> );
    }
}
 
export default ;
className={ this.state.condition ? "button toggled" : "button" }
<FontBlockComponent
{...this.props}
key={idx}
id={idx}
primaryText={fontblock.primaryText}
secondaryText={fontblock.secondaryText}
handlePrimaryFontblockNameChange={this.handlePrimaryFontblockNameChange.bind(
    this
)}
handleSecondaryFontblockNameChange={
    this.handleSecondaryFontblockNameChange
}
handleRemoveFontblock={this.handleRemoveFontblock}
/>