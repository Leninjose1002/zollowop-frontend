export const testBackendConnection = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/health`);
    const data = await response.json();
    console.log('✅ Backend Connected:', data);
    return true;
  } catch (error) {
    console.log('❌ Backend NOT Connected:', error);
    return false;
  }
};