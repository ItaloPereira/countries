export const requestErrorMessages = {
  400: 'Bad Request. Your browser sent a request that this server could not understand.',
  500: 'Internal Server Error',
};

export function getErrorMessageByRequest(error) {
  const { response } = error;
  if (!response) return false;
  const { status, data } = response;
  const { message } = data;

  if (message) return message;

  return requestErrorMessages[status];
}
