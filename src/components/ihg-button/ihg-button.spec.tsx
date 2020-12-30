import { newSpecPage } from '@stencil/core/testing';
import { IhgButton } from './ihg-button';
import * as helper from '../../utils/helper';

describe('ihg-button', () => {
  let page;
  let element: IhgButton;
  let shadowRoot: ShadowRoot;
  let button: HTMLButtonElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [IhgButton],
      html: `<ihg-button label="Test"></ihg-button>`,
      supportsShadowDom: true,
    });

    shadowRoot = page.root.shadowRoot;
    element = page.doc.querySelector('ihg-button');
    button = shadowRoot.querySelector('button') as HTMLButtonElement;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should build', async () => {
    expect(page).toBeTruthy();
  });

  describe('properties and events', () => {
    it('should set primary class if property is set', async () => {
      element.type = 'primary';
      await page.waitForChanges();
      expect(button.classList.contains('primary')).toBe(true);
    });

    it('should set secondary class if property is set', async () => {
      element.type = 'secondary';
      await page.waitForChanges();
      expect(button.classList.contains('secondary')).toBe(true);
    });

    it('should render spinner if loading property is set', async () => {
      element.loading = true;
      await page.waitForChanges();
      expect(button.querySelector('ihg-spinner')).not.toBeNull();
    });

    it('should link button if link property is set', async () => {
      element.link = 'https://test.de';
      await page.waitForChanges();
      const link = shadowRoot.querySelector('a');
      expect(link).not.toBeNull();
      expect(link.href).toEqual('https://test.de/');
    });

    it('should perform event tracking', async () => {
      const eventTrackingMock = jest.spyOn(helper, 'eventTracking');
      await button.dispatchEvent(new Event('click'));
      expect(eventTrackingMock).toHaveBeenCalledWith('button_click', 'Test', undefined);
      element.link = 'https://test.de';
      await page.waitForChanges();
      await button.dispatchEvent(new Event('click'));
      expect(eventTrackingMock).toHaveBeenCalledWith('button_click', 'Test', 'https://test.de');
    });

    it('should not perform event tracking if disabled', async () => {
      const eventTrackingMock = jest.spyOn(helper, 'eventTracking');
      element.disableTracking = true;
      await page.waitForChanges();
      await button.dispatchEvent(new Event('click'));
      expect(eventTrackingMock).not.toHaveBeenCalled();
    });
  });
});
