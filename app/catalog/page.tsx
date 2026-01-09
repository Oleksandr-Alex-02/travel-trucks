import { getCampers } from "@/lib/api";
import CatalogList from "@/components/CatalogList/CatalogList";

const Catalog = async () => {
  const resCamers = await getCampers();
  console.log("Catalog отримав:", resCamers);

  return (
    <section>
      <div>Catalog</div>
      <CatalogList campers={resCamers.items} />
    </section>
  );
};

export default Catalog;