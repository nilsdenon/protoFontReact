<div className="group-pickers">
    <FontPicker
        apiKey="AIzaSyBcJ0zfjh1BYgpDtpXDmigTl-53aojQ-Wc"
        activeFont={this.state.activeFontPrimary}
        options={{
            name: 'primary' + (this.props.id + 1)
        }}
        onChange={nextFont =>
            this.setState({
                activeFontPrimary: nextFont.family
            })
        }
    />
    <CustomColorPicker
        bgColor={this.state.primaryFontColor}
        handleTogglePrimaryColorPicker={this.handleTogglePrimaryColorPicker}
        primaryFontColorPicker={this.state.primaryFontColorPicker}
        handleClosePrimaryColorPicker={this.handleClosePrimaryColorPicker}
        primaryFontColor={this.state.primaryFontColor}
        handlePrimaryFontColor={this.handlePrimaryFontColor}
    />
</div>;
<CustomColorPicker
    bg={this.state.primaryFontColor}
    toggle={this.handleTogglePrimaryColorPicker}
    picker={this.state.primaryFontColorPicker}
    close={this.handleClosePrimaryColorPicker}
    color={this.state.primaryFontColor}
    change={this.handlePrimaryFontColor}
/>;
