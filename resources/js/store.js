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
    getTotalCharacters() {
        return this.state.characters.length;
    },
    resetSelectedCharacters() {
        this.state.selectedCharacters = [];
    },
    addCharacter(character) {
        // add more characters only upto 3
        if (this.state.selectedCharacters.length < 3) {
            if (!this.isSelected(character)) {
                this.state.selectedCharacters.push(
                    Object.assign({}, character)
                );
            }
        }
    },
    removeCharacter(character) {
        // remove a single character from the collection
        this.state.selectedCharacters = this.state.selectedCharacters.filter(
            c => c.name !== character.name
        );
    },
    isSelected(character) {
        // check if the character is selected already
        return this.state.selectedCharacters.find(
            c => c.name === character.name
        );
    }
};
