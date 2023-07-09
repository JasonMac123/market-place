interface itemParams {
  itemID?: string;
}

const ItemPage = async ({ params }: { params: itemParams }) => {
  const item = await getSpecificItemByID(params);

  return <div></div>;
};
