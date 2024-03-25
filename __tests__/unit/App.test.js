it('loads homepage', () => {
  const {getAllByText} = render(<App />);

  const appElements = getAllByText('app');
  expect(appElements).toHaveLength(1);
})