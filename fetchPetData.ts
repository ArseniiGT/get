// Описываем интерфейс для типизации возвращаемых данных
interface Pet {
    id: number;
    name: string;
    status: string;
    // можно добавить другие поля по необходимости
  }
  
  // Функция для выполнения GET-запроса и вывода данных в консоль
  async function fetchPetsByStatus(status: string): Promise<void> {
    const url = `https://petstore3.swagger.io/api/v3/pet/findByStatus?status=${status}`;
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Ошибка при выполнении запроса: ${response.status}`);
      }
  
      // Преобразуем ответ в JSON и типизируем его как массив объектов Pet
      const data: Pet[] = await response.json();
      
      // Выводим полученные данные в консоль
      console.log('Полученные данные о питомцах:', data);
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  }
  
  // Вызываем функцию для получения данных о доступных питомцах
  fetchPetsByStatus('available');
  