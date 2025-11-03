import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, projectType, budget, message } = body;

    // 验证必填字段
    if (!name || !phone || !projectType || !message) {
      return NextResponse.json(
        { error: '请填写所有必填字段' },
        { status: 400 }
      );
    }

    // 验证手机号格式
    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: '请输入正确的手机号码' },
        { status: 400 }
      );
    }

    // 验证邮箱格式（如果提供）
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: '请输入正确的邮箱地址' },
          { status: 400 }
        );
      }
    }

    // 这里可以添加实际的业务逻辑：
    // 1. 保存到数据库
    // 2. 发送邮件通知
    // 3. 发送到CRM系统
    // 4. 发送短信通知等

    console.log('收到咨询表单：', {
      name,
      phone,
      email,
      projectType,
      budget,
      message,
      timestamp: new Date().toISOString()
    });

    // 模拟处理延迟
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        success: true,
        message: '提交成功，我们会尽快与您联系！'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('表单提交错误：', error);
    return NextResponse.json(
      { error: '服务器错误，请稍后重试' },
      { status: 500 }
    );
  }
}

