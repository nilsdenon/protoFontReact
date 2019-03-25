import React, { Component } from 'react';
//import logo from "./logo.svg";
import Header from '../Header/Header';
//import TextInput from '../FontBlock/TextInput';
import FontBlock from '../IncorporationForm/FontBlock';
import './App.scss';
//import FontBlock from '../FontBlock/FontBlock';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <Header branding="proto" claim="Font" />
                <FontBlock />
            </>
        );
    }
}
