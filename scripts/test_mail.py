"""Test SARADA SMTP + API mail endpoints."""
from __future__ import annotations

import json
import smtplib
import ssl
import urllib.error
import urllib.request
from email.mime.text import MIMEText
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
env: dict[str, str] = {}
for line in (ROOT / ".env").read_text(encoding="utf-8").splitlines():
    line = line.strip()
    if not line or line.startswith("#") or "=" not in line:
        continue
    k, v = line.split("=", 1)
    env[k.strip()] = v.strip().strip('"').strip("'")

user = env["MAIL_USERNAME"]
password = env["MAIL_PASSWORD"].replace(" ", "")
to = env.get("MAIL_NOTIFY_TO", "pariachevier2013@gmail.com")
from_addr = env.get("MAIL_FROM_ADDRESS", user)
from_name = env.get("MAIL_FROM_NAME", "SARADA Netralaya")
host = env.get("MAIL_HOST", "smtp.gmail.com")
port = int(env.get("MAIL_PORT", "587"))


def test_smtp() -> None:
    print(f"1) SMTP direct: {user} -> {to}")
    msg = MIMEText("SARADA SMTP direct test OK.")
    msg["Subject"] = "SARADA — SMTP direct test OK"
    msg["From"] = f"{from_name} <{from_addr}>"
    msg["To"] = to
    ctx = ssl.create_default_context()
    with smtplib.SMTP(host, port, timeout=40) as s:
        s.starttls(context=ctx)
        s.login(user, password)
        s.sendmail(from_addr, [to], msg.as_string())
    print("   SMTP_OK")


def post(url: str, payload: dict) -> dict:
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=data,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            body = r.read().decode("utf-8")
            return {"status": r.status, "body": json.loads(body)}
    except urllib.error.HTTPError as e:
        raw = e.read().decode("utf-8", errors="replace")
        try:
            parsed = json.loads(raw)
        except Exception:
            parsed = {"raw": raw}
        return {"status": e.code, "body": parsed}


def test_apis(base: str) -> None:
    print(f"2) Appointment API: {base}/api/appointments")
    ap = post(
        f"{base}/api/appointments",
        {
            "name": "Mail Test Patient",
            "phone": "7091090014",
            "email": "test@example.com",
            "doctor": "Any Available",
            "date": "2026-08-01",
            "time": "10:00 AM",
            "message": "Automated mail pipeline test — appointment",
        },
    )
    print(f"   status={ap['status']} body={ap['body']}")

    print(f"3) Contact API: {base}/api/contacts")
    ct = post(
        f"{base}/api/contacts",
        {
            "name": "Mail Test Contact",
            "phone": "7091090016",
            "email": "test@example.com",
            "subject": "SMTP pipeline test",
            "message": "Automated mail pipeline test — contact form",
        },
    )
    print(f"   status={ct['status']} body={ct['body']}")


if __name__ == "__main__":
    test_smtp()
    for base in ("http://127.0.0.1:3000", "http://localhost:3000"):
        try:
            urllib.request.urlopen(base, timeout=3)
            test_apis(base)
            break
        except Exception as e:
            print(f"   server check {base}: {e}")
    else:
        print("DEV_SERVER_DOWN — start bunx next dev -p 3000 then re-run")
