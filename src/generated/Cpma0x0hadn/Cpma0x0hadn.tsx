
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-pma0x0hadn',
  shadow: true,
})
export class Cpma0x0hadn {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  