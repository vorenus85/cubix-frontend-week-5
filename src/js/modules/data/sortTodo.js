export const sortDifficultyAsc = (todos) => {
    const copyTodos = [...todos];

    return copyTodos.sort((a, b) => {
        return a.difficulty - b.difficulty;
    });
};

export const sortDifficultyDesc = (todos) => {
    const copyTodos = [...todos];

    return copyTodos.sort((a, b) => {
        return b.difficulty - a.difficulty;
    });
};
