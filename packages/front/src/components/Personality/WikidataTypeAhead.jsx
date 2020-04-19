import React, { Component } from "react";
import axios from "axios";
import { AutoComplete } from "antd";

const { Option } = AutoComplete;
class WikdiataTypeAhead extends Component {
    constructor(props) {
        super(props);

        this.state = {
            children: []
        };
        this.onSelect = this.onSelect.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    wikidataSearch(query, lang = "en") {
        const params = {
            action: "wbsearchentities",
            search: query,
            format: "json",
            errorformat: "plaintext",
            language: lang,
            uselang: lang,
            type: "item",
            origin: "*"
        };

        axios
            .get(`https://www.wikidata.org/w/api.php`, { params })
            .then(response => {
                const { search } = response && response.data;
                const children =
                    search &&
                    search.map(option => (
                        <Option key={option.id} value={option.label}>
                            <span>{option.label}</span>
                            <small>{option.description}</small>
                        </Option>
                    ));

                this.setState({
                    isLoading: false,
                    children,
                    search
                });
            })
            .catch(e => {
                throw e;
            });
    }

    handleSearch(query) {
        this.setState({ isLoading: true });
        this.wikidataSearch(query);
    }

    fetchWikidata(wikidataId) {
        const wbEntities = this.state.search.filter(
            child => child.id === wikidataId
        );
        if (Array.isArray(wbEntities) && wbEntities.length > 0) {
            const wbEntity = wbEntities[0];
            axios
                .get(`${process.env.API_URL}/wikidata/${wbEntity.id}`)
                .then(response => {
                    const personality = {
                        ...response.data,
                        wikidata: wbEntity.id
                    };
                    this.props.callback({
                        personality,
                        inputsDisabled: true
                    });
                })
                .catch(e => {
                    throw e;
                });
        } else {
            this.props.callback({
                personality: {
                    description: ""
                },
                inputsDisabled: false
            });
        }
    }

    onSelect(value, option) {
        this.fetchWikidata(option.props.key);
    }
    render() {
        return (
            <AutoComplete
                style={this.props.style || {}}
                onSearch={this.handleSearch}
                onSelect={this.onSelect}
                // TODO: onChange
                // TODO: selected value should be label
                placeholder="Name of the personality"
            >
                {this.state.children}
            </AutoComplete>
        );
    }
}

export default WikdiataTypeAhead;
