import React, { useState } from "react";

const RequestForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-5xl mx-auto bg-gray-100 p-6 mb-6 rounded-md shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2
          onClick={toggleForm}
          className="text-3xl font-bold text-left cursor-pointer"
        >
          {isOpen ? "Свернуть запрос предложений" : "Запрос предложений"}
        </h2>
      </div>

      {isOpen && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium">Указать объект:</label>
              <select className="w-full p-2 mt-1 border rounded-md">
                <option>Да</option>
                <option>Нет</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Указать мой телефон:</label>
              <select className="w-full p-2 mt-1 border rounded-md">
                <option>Да</option>
                <option>Нет</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium">Доставка:</label>
              <select className="w-full p-2 mt-1 border rounded-md">
                <option>Самовывоз</option>
                <option>Доставка курьером</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Наличие:</label>
              <select className="w-full p-2 mt-1 border rounded-md">
                <option>По наличию</option>
                <option>Под заказ</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium">Упаковка:</label>
              <select className="w-full p-2 mt-1 border rounded-md">
                <option>Сделать обрешетку</option>
                <option>Не упаковывать</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Добавить реквизиты:</label>
              <select className="w-full p-2 mt-1 border rounded-md">
                <option>Да</option>
                <option>Нет</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium">Кому:</label>
              <input
                type="text"
                className="w-full p-2 mt-1 border rounded-md"
                placeholder="mail@mail.ru, Иван Иванов"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Тема:</label>
              <input
                type="text"
                className="w-full p-2 mt-1 border rounded-md"
                placeholder="Запрос NxDCF555 от 01.01.2025 (Просьба не менять тему письма)"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium">Сообщение:</label>
            <textarea
              rows={5}
              className="w-full p-2 mt-1 border rounded-md"
              placeholder="Добрый день, прошу подготовить предложение на следующие позиции..."
            ></textarea>
          </div>

          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Запросить предложения
            </button>
            <button className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400">
              Пропустить
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default RequestForm;
