const bad = () => {
  throw Error('Bad code');
};

export default () => {
  try {
    bad();
  } catch (err) {
    return true;
  }
}