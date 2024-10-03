import React, { Component } from 'react';
import SuggestionItem from '../SuggestionItem';
import './index.css';

class GoogleSuggestions extends Component {
    state = {
        searchInput: '',
    };

    updateSearchInput = value => {
        this.setState({ searchInput: value });
    };

    onChangeSearchInput = e => {
        this.setState({ searchInput: e.target.value });
    };

    render() {
        const { suggestionsList } = this.props;
        const { searchInput } = this.state;
        const searchResults = suggestionsList.filter(eachSuggestion =>
            eachSuggestion.suggestion
                .toLowerCase()
                .includes(searchInput.toLowerCase())
        );

        return (
            <div className="app-container">
                <div className="google-suggestions-container">
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
                        alt="google logo"
                        className="google-logo"
                    />
                    <div className="search-input-suggestions-container">
                        <div className="search-input-container">
                            <img
                                alt="search icon"
                                className="search-icon"
                                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                            />
                            <input
                                type="search"
                                className="search-input"
                                placeholder="Search Google"
                                onChange={this.onChangeSearchInput}
                                value={searchInput}
                            />
                        </div>
                        <ul className="suggestions-list">
                            {searchResults.map(eachSuggestion => (
                                <SuggestionItem
                                    key={eachSuggestion.id}
                                    suggestionDetails={eachSuggestion}
                                    updateSearchInput={this.updateSearchInput}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default GoogleSuggestions;
