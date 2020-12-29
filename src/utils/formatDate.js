const formatDate = (date) => {
    const d = new Date(date);
    const m = `0${d.getMonth() + 1}`.slice(-2);
    const y = `${d.getFullYear()}`;
    const day = `0${d.getDate()}`.slice(-2);

    return [y,m,day].join("-");
}

export default formatDate