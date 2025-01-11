import React, { useState } from "react";

interface Row {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  price: number;
  vat: number; // Ставка НДС
}

const PurchaseForm: React.FC = () => {
  const [budget, setBudget] = useState<number>(5000);
  const [object, setObject] = useState<string>("ЖК Пионер");
  const [category, setCategory] = useState<string>("Стройматериалы");
  const [subcategory, setSubcategory] = useState<string>("Отделочные материалы");
  const [justification, setJustification] = useState<string>(
    "Закупка на 1 этаж блок-секции №2"
  );
  const [approvalDate, setApprovalDate] = useState<string>("2025-01-10");
  const [deliveryDate, setDeliveryDate] = useState<string>("2025-01-20");
  const [rows, setRows] = useState<Row[]>([
    { id: 1, name: "Краска зелёная - ведро 5 л", quantity: 1, unit: "шт.", price: 1000, vat: 20 },
    { id: 2, name: "Краска красная - ведро 5 л", quantity: 1, unit: "шт.", price: 1000, vat: 20 },
    { id: 3, name: "Краска белая - ведро 5 л", quantity: 1, unit: "шт.", price: 1000, vat: 20 },
  ]);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const addRow = () => {
    setRows([
      ...rows,
      { id: rows.length + 1, name: "", quantity: 1, unit: "шт.", price: 0, vat: 20 },
    ]);
  };

  const handleRowChange = (id: number, key: keyof Row, value: string | number) => {
    setRows(
      rows.map((row) =>
        row.id === id ? { ...row, [key]: value } : row
      )
    );
  };

  const total = rows.reduce((sum, row) => sum + row.quantity * row.price, 0);
  const totalVAT = rows.reduce((sum, row) => sum + (row.quantity * row.price * row.vat) / 100, 0);

  return (
    <div
      className={`p-6 max-w-5xl mx-auto bg-gray-100 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="flex justify-between items-center mb-6">
        <h1
          className="text-3xl font-bold text-left cursor-pointer"
          onClick={toggleCollapse}
        >
          {collapsed ? "Развернуть закупку" : "Новая закупка"}
        </h1>
      </div>

      {/* Этот блок сворачивается/разворачивается */}
      {!collapsed && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium">Бюджет закупки:</label>
              <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full p-2 mt-1 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Требуемая дата согласования:</label>
              <input
                type="date"
                value={approvalDate}
                onChange={(e) => setApprovalDate(e.target.value)}
                className="w-full p-2 mt-1 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Требуемая дата поставки:</label>
              <input
                type="date"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
                className="w-full p-2 mt-1 border rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium">Объект:</label>
              <select
                value={object}
                onChange={(e) => setObject(e.target.value)}
                className="w-full p-2 mt-1 border rounded-md"
              >
                <option>ЖК Пионер</option>
                <option>ЖК Солнечный</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Категория:</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 mt-1 border rounded-md"
              >
                <option>Стройматериалы</option>
                <option>Офисные принадлежности</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Подкатегория:</label>
              <select
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
                className="w-full p-2 mt-1 border rounded-md"
              >
                <option>Отделочные материалы</option>
                <option>Краски</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium">Краткое обоснование:</label>
            <input
              type="text"
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
              className="w-full p-2 mt-1 border rounded-md"
            />
          </div>
          <table className="w-full border-collapse border border-gray-300 mb-6">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 p-2">№</th>
                <th className="border border-gray-300 p-2">Наименование товара / услуги</th>
                <th className="border border-gray-300 p-2">Количество</th>
                <th className="border border-gray-300 p-2">Ед. изм.</th>
                <th className="border border-gray-300 p-2">Цена</th>
                <th className="border border-gray-300 p-2">Ставка НДС</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td className="border border-gray-300 p-2 text-center">{row.id}</td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      value={row.name}
                      onChange={(e) => handleRowChange(row.id, "name", e.target.value)}
                      className="w-full p-2 border rounded-md"
                    />
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    <input
                      type="number"
                      value={row.quantity}
                      onChange={(e) => handleRowChange(row.id, "quantity", +e.target.value)}
                      className="w-full p-2 border rounded-md"
                    />
                  </td>
                  <td className="border border-gray-300 p-2 text-center">{row.unit}</td>
                  <td className="border border-gray-300 p-2 text-center">
                    <input
                      type="number"
                      value={row.price}
                      onChange={(e) => handleRowChange(row.id, "price", +e.target.value)}
                      className="w-full p-2 border rounded-md"
                    />
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    <input
                      type="number"
                      value={row.vat}
                      onChange={(e) => handleRowChange(row.id, "vat", +e.target.value)}
                      className="w-full p-2 border rounded-md"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={addRow}
            className="mb-6 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            + Добавить строку
          </button>
          <div className="mb-6">
            <p>
              <strong>Итого:</strong> {total.toFixed(2)} рублей (в т.ч. НДС {totalVAT.toFixed(2)} рублей)
            </p>
          </div>
          <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
            Зарегистрировать
          </button>
        </>
      )}
    </div>
  );
};

export default PurchaseForm;
