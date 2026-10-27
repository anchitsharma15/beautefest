"""One-off cloud launch gate. Manual runs validate only."""
import os
from datetime import datetime, timedelta, timezone

TARGET = datetime(2026, 10, 28, 6, 30, tzinfo=timezone.utc)

def should_publish(event, now):
    return event == 'schedule' and TARGET <= now < TARGET + timedelta(hours=24)

if __name__ == '__main__':
    now = datetime.now(timezone.utc)
    allowed = should_publish(os.environ.get('GITHUB_EVENT_NAME', ''), now)
    line = 'publish=' + str(allowed).lower()
    if os.environ.get('GITHUB_OUTPUT'):
        with open(os.environ['GITHUB_OUTPUT'], 'a') as f:
            f.write(line + '\n')
    print(line)
    print('Target: 28 October 2026, 12:00 noon IST / 06:30 UTC')
    print('Current UTC:', now.isoformat())
    if not allowed:
        print('Validation only: production is unchanged.')
