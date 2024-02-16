import { NextResponse } from "next/server"


export function DELETE(request) {
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Doe' }
    ]

    return NextResponse.json({
        "message": "User deleted successfully",
        "status": "success"
    })
}