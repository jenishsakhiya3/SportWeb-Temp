import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <aside class="sidebar">
      <div class="sidebar-brand">
        <div class="brand-logo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
        </div>
        <span class="brand-name">Sport<span class="text-gradient-green">Console</span></span>
      </div>

      <nav class="sidebar-menu">
        <a routerLink="/dashboard" routerLinkActive="active" class="menu-item">
          <svg class="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
          <span>API Console</span>
        </a>
      </nav>

      <div class="sidebar-profile">
        <img [src]="profile.avatarUrl" alt="Avatar" class="profile-avatar">
        <div class="profile-info">
          <span class="profile-name">{{ profile.name }}</span>
          <span class="profile-level">{{ profile.level }}</span>
        </div>
      </div>
    </aside>
  `,
  styles: [`
    .sidebar {
      width: var(--sidebar-width);
      background: var(--bg-secondary);
      border-right: 1px solid var(--border-color);
      display: flex;
      flex-direction: column;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 100;
      transition: all var(--transition-speed) ease;
    }

    .sidebar-brand {
      height: var(--header-height);
      display: flex;
      align-items: center;
      padding: 0 24px;
      gap: 12px;
      border-bottom: 1px solid var(--border-color);
    }

    .brand-logo {
      width: 36px;
      height: 36px;
      background: linear-gradient(135deg, var(--accent-green) 0%, var(--accent-blue) 100%);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--bg-primary);
      box-shadow: var(--glow-green);
    }

    .brand-logo svg {
      width: 20px;
      height: 20px;
    }

    .brand-name {
      font-size: 1.35rem;
      font-weight: 800;
      letter-spacing: -0.5px;
    }

    .sidebar-menu {
      padding: 24px 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      flex: 1;
    }

    .menu-item {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 12px 16px;
      color: var(--text-secondary);
      text-decoration: none;
      font-weight: 500;
      border-radius: var(--border-radius-sm);
      transition: all var(--transition-speed) ease;
      border: 1px solid transparent;
    }

    .menu-item:hover {
      color: var(--text-primary);
      background: var(--glass-hover-bg);
      transform: translateX(4px);
    }

    .menu-icon {
      width: 20px;
      height: 20px;
      transition: transform var(--transition-speed) ease;
    }

    .menu-item:hover .menu-icon {
      transform: scale(1.1);
    }

    .menu-item.active {
      color: var(--accent-green);
      background: rgba(16, 222, 137, 0.06);
      border-color: rgba(16, 222, 137, 0.15);
      box-shadow: inset 0 0 10px rgba(16, 222, 137, 0.03);
    }

    .menu-item.active .menu-icon {
      color: var(--accent-green);
      filter: drop-shadow(0 0 5px rgba(16, 222, 137, 0.4));
    }

    .sidebar-profile {
      padding: 20px 24px;
      display: flex;
      align-items: center;
      gap: 12px;
      border-top: 1px solid var(--border-color);
      background: rgba(0, 0, 0, 0.1);
    }

    .profile-avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid var(--accent-green);
      box-shadow: var(--glow-green);
    }

    .profile-info {
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .profile-name {
      font-weight: 600;
      font-size: 0.95rem;
      color: var(--text-primary);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .profile-level {
      font-size: 0.75rem;
      color: var(--accent-blue);
      font-weight: 500;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .sidebar {
        width: 100%;
        height: 60px;
        flex-direction: row;
        border-right: none;
        border-top: 1px solid var(--border-color);
        top: auto;
        bottom: 0;
      }

      .sidebar-brand, .sidebar-profile {
        display: none;
      }

      .sidebar-menu {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 0;
        width: 100%;
        height: 100%;
        gap: 0;
      }

      .menu-item {
        flex-direction: column;
        gap: 4px;
        padding: 8px;
        font-size: 0.75rem;
        flex: 1;
        align-items: center;
        justify-content: center;
        border-radius: 0;
      }

      .menu-item:hover {
        transform: none;
        background: transparent;
      }

      .menu-item.active {
        background: transparent;
        border-color: transparent;
        border-bottom: 2px solid var(--accent-green);
      }
    }
  `]
})
export class SidebarComponent {
  profile = {
    name: 'Alex Mercer',
    avatarUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=200',
    level: 'Elite Athlete'
  };
}
