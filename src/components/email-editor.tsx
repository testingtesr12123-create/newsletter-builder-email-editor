'use client';

import { useEffect, useRef } from 'react';
import 'grapesjs/dist/css/grapes.min.css';

export const EmailEditor = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const editorInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && editorRef.current && !editorInstanceRef.current) {
      const initEditor = async () => {
        const grapesjs = (await import('grapesjs')).default;
        const newsletter = (await import('grapesjs-preset-newsletter')).default;

        editorInstanceRef.current = grapesjs.init({
          container: editorRef.current!,
          height: '100vh',
          width: '100%',
          plugins: [newsletter],
          pluginsOpts: {
            [newsletter]: {
              modalLabelImport: 'Import',
              modalLabelExport: 'Export',
              codeViewerTheme: 'material',
              importPlaceholder: '<table>...</table>',
              cellStyle: {
                'font-size': '14px',
                'font-weight': '400',
                'vertical-align': 'top',
                color: '#111111',
                margin: 0,
                padding: 0,
              }
            }
          },
          storageManager: false,
          deviceManager: {
            devices: [{
              name: 'Desktop',
              width: '',
            }]
          },
          canvas: {
            styles: [
              'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
            ]
          }
        });

        // Add custom CSS for compact blocks
        const style = document.createElement('style');
        style.innerHTML = `
          .gjs-block {
            min-height: 55px !important;
            height: auto !important;
            padding: 8px 6px !important;
            width: calc(50% - 8px) !important;
            margin: 4px !important;
          }
          
          .gjs-block-label {
            font-size: 11px !important;
            line-height: 1.2 !important;
            margin-top: 4px !important;
          }
          
          .gjs-block svg,
          .gjs-block .gjs-block-svg {
            width: 50% !important;
            height: 32px !important;
            max-height: 32px !important;
          }
          
          .gjs-block .fa,
          .gjs-block [class^="fa-"] {
            font-size: 24px !important;
            line-height: 32px !important;
          }
          
          .gjs-blocks-c {
            padding: 6px !important;
          }
          
          .gjs-category-title {
            font-size: 12px !important;
            padding: 8px 10px !important;
          }
        `;
        document.head.appendChild(style);

        // Add custom blocks
        const blockManager = editorInstanceRef.current.BlockManager;

        // Social Block
        blockManager.add('social-block', {
          label: 'Social',
          category: 'Extra',
          content: `
            <table style="width: 100%; text-align: center; margin: 20px 0;">
              <tr>
                <td>
                  <a href="#" style="display: inline-block; margin: 0 10px;">
                    <img src="https://via.placeholder.com/32x32/3b5998/fff?text=f" alt="Facebook" style="width: 32px; height: 32px;" />
                  </a>
                  <a href="#" style="display: inline-block; margin: 0 10px;">
                    <img src="https://via.placeholder.com/32x32/1DA1F2/fff?text=T" alt="Twitter" style="width: 32px; height: 32px;" />
                  </a>
                  <a href="#" style="display: inline-block; margin: 0 10px;">
                    <img src="https://via.placeholder.com/32x32/0077b5/fff?text=in" alt="LinkedIn" style="width: 32px; height: 32px;" />
                  </a>
                  <a href="#" style="display: inline-block; margin: 0 10px;">
                    <img src="https://via.placeholder.com/32x32/E4405F/fff?text=IG" alt="Instagram" style="width: 32px; height: 32px;" />
                  </a>
                </td>
              </tr>
            </table>
          `,
          attributes: { class: 'fa fa-share-alt' }
        });

        // Unsubscribe Link Block
        blockManager.add('unsubscribe-link', {
          label: 'Unsubscribe Link',
          category: 'Extra',
          content: `
            <table style="width: 100%; text-align: center; margin: 20px 0;">
              <tr>
                <td style="font-size: 12px; color: #999999;">
                  <a href="#unsubscribe" style="color: #999999; text-decoration: underline;">Unsubscribe</a> from this list
                </td>
              </tr>
            </table>
          `,
          attributes: { class: 'fa fa-unlink' }
        });

        // Social Elements Block
        blockManager.add('social-elements', {
          label: 'Social Elements',
          category: 'Extra',
          content: `
            <table style="width: 100%; margin: 20px 0;">
              <tr>
                <td style="text-align: center; padding: 10px;">
                  <table style="display: inline-block;">
                    <tr>
                      <td style="padding: 0 5px;">
                        <a href="#" style="display: block; width: 40px; height: 40px; background-color: #3b5998; border-radius: 50%; text-align: center; line-height: 40px; color: white; text-decoration: none; font-weight: bold;">f</a>
                      </td>
                      <td style="padding: 0 5px;">
                        <a href="#" style="display: block; width: 40px; height: 40px; background-color: #1DA1F2; border-radius: 50%; text-align: center; line-height: 40px; color: white; text-decoration: none; font-weight: bold;">T</a>
                      </td>
                      <td style="padding: 0 5px;">
                        <a href="#" style="display: block; width: 40px; height: 40px; background-color: #0077b5; border-radius: 50%; text-align: center; line-height: 40px; color: white; text-decoration: none; font-weight: bold;">in</a>
                      </td>
                      <td style="padding: 0 5px;">
                        <a href="#" style="display: block; width: 40px; height: 40px; background-color: #E4405F; border-radius: 50%; text-align: center; line-height: 40px; color: white; text-decoration: none; font-weight: bold;">IG</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          `,
          attributes: { class: 'fa fa-users' }
        });

        // HTML Block
        blockManager.add('html-block', {
          label: 'HTML',
          category: 'Extra',
          content: `
            <div style="padding: 20px; background-color: #f5f5f5; border: 1px solid #ddd; font-family: monospace; font-size: 12px;">
              &lt;div&gt;Custom HTML Content&lt;/div&gt;
            </div>
          `,
          attributes: { class: 'fa fa-code' }
        });

        // Merge Tags Section (separate category)
        blockManager.add('merge-tag-name', {
          label: 'Name',
          category: 'Merge Tags',
          content: `<span style="background-color: #f0f0f0; padding: 2px 6px; border-radius: 3px; font-family: monospace; font-size: 12px;">{{name}}</span>`,
          attributes: { class: 'fa fa-tag' }
        });

        blockManager.add('merge-tag-email', {
          label: 'Email',
          category: 'Merge Tags',
          content: `<span style="background-color: #f0f0f0; padding: 2px 6px; border-radius: 3px; font-family: monospace; font-size: 12px;">{{email}}</span>`,
          attributes: { class: 'fa fa-tag' }
        });

        blockManager.add('merge-tag-firstname', {
          label: 'First Name',
          category: 'Merge Tags',
          content: `<span style="background-color: #f0f0f0; padding: 2px 6px; border-radius: 3px; font-family: monospace; font-size: 12px;">{{first_name}}</span>`,
          attributes: { class: 'fa fa-tag' }
        });

        blockManager.add('merge-tag-lastname', {
          label: 'Last Name',
          category: 'Merge Tags',
          content: `<span style="background-color: #f0f0f0; padding: 2px 6px; border-radius: 3px; font-family: monospace; font-size: 12px;">{{last_name}}</span>`,
          attributes: { class: 'fa fa-tag' }
        });

        blockManager.add('merge-tag-company', {
          label: 'Company',
          category: 'Merge Tags',
          content: `<span style="background-color: #f0f0f0; padding: 2px 6px; border-radius: 3px; font-family: monospace; font-size: 12px;">{{company}}</span>`,
          attributes: { class: 'fa fa-tag' }
        });

        blockManager.add('merge-tag-custom', {
          label: 'Custom Tag',
          category: 'Merge Tags',
          content: `<span style="background-color: #f0f0f0; padding: 2px 6px; border-radius: 3px; font-family: monospace; font-size: 12px;">{{custom}}</span>`,
          attributes: { class: 'fa fa-tag' }
        });
      };

      initEditor();
    }

    return () => {
      if (editorInstanceRef.current) {
        editorInstanceRef.current.destroy();
        editorInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <div ref={editorRef} className="w-full h-full" />
    </div>
  );
};