import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Typography,
  Paper,
} from "@mui/material";

const SupplierAnalysis = () => {
  const suppliers = [
    { id: 1, name: "Рога и Копыта" },
    { id: 2, name: "Ромашка" },
    { id: 3, name: "ООО 'ААА'" },
  ];

  const items = [
    { id: 1, name: "Краска зелёная - ведро 5 л", prices: [900, 1000, 3000] },
    { id: 2, name: "Краска красная - ведро 5 л", prices: [1000, 900, 2000] },
    { id: 3, name: "Краска белая - ведро 5 л", prices: [1000, 900, 4800] },
  ];

  type Comment = {
    text: string;
    timestamp: string;
  };

  const [comments, setComments] = useState<Comment[]>([]);
  const [currentComment, setCurrentComment] = useState<string>("");
  const [selectedOffers, setSelectedOffers] = useState<Record<number, number>>(
    {}
  );
  const [isExpanded, setIsExpanded] = useState<boolean>(true); // Состояние для сворачивания/разворачивания

  const handleCommentSubmit = () => {
    if (currentComment) {
      setComments((prev) => [
        ...prev,
        { text: currentComment, timestamp: new Date().toLocaleString() },
      ]);
      setCurrentComment("");
    }
  };

  const handleOfferSelection = (itemId: number, supplierIndex: number) => {
    setSelectedOffers((prev) => ({
      ...prev,
      [itemId]: supplierIndex,
    }));
  };

  const handleFinishSelection = () => {
    console.log("Выбранные предложения:", selectedOffers);
    alert("Отбор завершён!");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-start"  // Изменено с center на flex-start
      height="100vh"
      padding="10px" // Убираем лишний отступ
    >
      <Box width="80%" maxWidth="1200px">
        {/* Заголовок с кликабельным сворачиванием */}
        <Box
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            cursor: "pointer",
            padding: "10px",
            backgroundColor: "#f0f0f0",
            borderRadius: "5px",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          <Typography variant="h4">
            {isExpanded ? "Скрыть анализ предложений" : "Анализ предложений"}
          </Typography>
        </Box>

        {isExpanded && (
          <Box p={3} borderRadius={2} boxShadow={3} bgcolor="white">
            <Typography variant="h4" gutterBottom align="center">
              Анализ предложений
            </Typography>

            {/* Поставщики */}
            {suppliers.map((supplier, index) => (
              <Box
                key={supplier.id}
                display="flex"
                alignItems="center"
                mb={2}
                gap={2}
              >
                <Select value={supplier.name} style={{ minWidth: 200 }}>
                  <MenuItem value={supplier.name}>{supplier.name}</MenuItem>
                </Select>
                <Button variant="outlined">Файл</Button>
                <Typography>
                  Прикреплённые документы: Спецификация.pdf
                </Typography>
              </Box>
            ))}

            <Button variant="outlined" style={{ marginBottom: 20 }}>
              Добавить поставщика
            </Button>

            {/* Таблица */}
            <TableContainer component={Paper} style={{ marginBottom: 20 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>№</TableCell>
                    <TableCell>Наименование товара / услуги</TableCell>
                    <TableCell>Кол-во</TableCell>
                    <TableCell>Ед. изм.</TableCell>
                    {suppliers.map((supplier) => (
                      <TableCell key={supplier.id} align="center">
                        {supplier.name}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>шт.</TableCell>
                      {item.prices.map((price, supplierIndex) => (
                        <TableCell key={supplierIndex} align="center">
                          <Checkbox
                            checked={selectedOffers[item.id] === supplierIndex}
                            onChange={() =>
                              handleOfferSelection(item.id, supplierIndex)
                            }
                          />
                          <Typography
                            color={
                              Math.min(...item.prices) === price
                                ? "green"
                                : "red"
                            }
                          >
                            {price}
                          </Typography>
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Комментарии */}
            <Typography variant="h6" gutterBottom>
              Комментарии:
            </Typography>
            <Box mb={2}>
              {comments.map((comment, index) => (
                <Typography key={index}>
                  {comment.timestamp}: {comment.text}
                </Typography>
              ))}
            </Box>
            <Box display="flex" gap={2} mb={2}>
              <TextField
                fullWidth
                value={currentComment}
                onChange={(e) => setCurrentComment(e.target.value)}
                placeholder="Введите комментарий"
              />
              <Button variant="outlined" onClick={handleCommentSubmit}>
                Отправить
              </Button>
            </Box>

            <Button variant="outlined" onClick={handleFinishSelection}>
              Завершить отбор
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SupplierAnalysis;
