export default function searchCheck() {
  const { banco, filterSuperT } = this.props;
  if (!filterSuperT) {
    this.setState({
      renderCard: banco
        .filter((card) => card.superT === true),
    });
  } else {
    this.setState({
      renderCard: banco,
    });
  }
}
