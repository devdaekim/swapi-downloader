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
        if (this.state.selectedCharacters.length < 3) {
            // determin if the character is already selected
            let selected = this.state.selectedCharacters.find(
                c => c.name === character.name
            );

            if (!selected) {
                this.state.selectedCharacters.push(
                    Object.assign({}, character)
                );
            }
        }
    }
};
