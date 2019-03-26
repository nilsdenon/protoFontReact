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






var myArray = [
    "Apples",
    "Bananas",
    "Pears"
  ];
  
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];





  const quotes = [
    {
        author: 'Boss Dog, Bob Ross',
        content: 'There are no mistakes, only happy accidents.'
    },
    {
        author: 'Bob "Bob Ross" Ross',
        content:
            "Talent is a pursued interest. Anything that you're willing to practice, you can do."
    },
    { author: 'Bob N. Ross', content: "Alright, let's get crazy." },
    { author: 'Bob Ross', content: 'Lets build a happy little cloud.' },
    {
        author: 'Robert Norman Ross',
        content: 'Lets build some happy little trees.'
    },
    {
        author: 'Bob Ross',
        content: 'And right there you got an almighty cloud.'
    },
    {
        author: 'Bob Ross the Devil Defeater',
        content: 'Just beat the devil out of it.'
    },
    {
        author: 'Bob Ross',
        content: "Let's make a happy little mountain now."
    },
    {
        author: 'Bob Ross',
        content: 'There’s nothing wrong with having a tree as a friend.'
    },
    { author: 'Bob Ross', content: 'Alizarin Crimson' },
    { author: 'Bob Ross', content: 'Cadmium Yellow' },
    { author: 'Bob Ross', content: 'Phthalo Blue' },
    { author: 'Bob Ross', content: 'Van Dyke Brown' },
    { author: 'Bob Ross', content: 'Yellow Ochre' }
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];