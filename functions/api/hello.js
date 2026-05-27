export async function onRequest(context) {
    // Đây là code Backend xử lý logic và trả về dữ liệu dạng JSON
    const responseData = {
        status: "Thành công",
        message: "Chào Mọi Người! API Backend từ Cloudflare Functions đã chạy ngon lành rồi nhé!",
        time: new Date().toISOString()
    };

    return new Response(JSON.stringify(responseData), {
        headers: { 
            "Content-Type": "application/json;charset=UTF-8" 
        },
    });
}
