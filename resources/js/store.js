export const store = {
    state: {
        characters: [],
        selectedCharacters: []
    },
    initialiseCharacters(data) {
        data.forEach(arr => {
            this.state.characters.push(arr);
        });
    },
    getSelectedCharacters() {
        return this.state.selectedCharacters;
    },
    resetSelectedCharacters() {
        this.state.selectedCharacters = [];
    },
    addCharacter(character) {
        if (this.state.selectedCharacters.length < 3) {
            this.state.selectedCharacters.push(character);
        }
    }
};
