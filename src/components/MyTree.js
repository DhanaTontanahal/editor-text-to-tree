import React, { useState, useEffect } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

function MyTree() {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(false);

  const loadData = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  };
  useEffect(() => {
    loadData();
    return () => {};
  }, []);

  return (
    <div>
      <Button
        label="Show"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Header"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
          <Column sortable field="title" header="Title"></Column>
          <Column field="description" header="Description"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="discountPercentage" header="Discount"></Column>
        </DataTable>
      </Dialog>
    </div>
  );
}

export default MyTree;
